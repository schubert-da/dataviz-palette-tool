import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-choropleth-map',
  templateUrl: './choropleth-map.component.html',
  styleUrls: ['./choropleth-map.component.scss']
})
export class ChoroplethMapComponent implements OnInit {
  @Input() colors: string[];
  palette_subscription: Subscription;
  background_subscription: Subscription;
  background: string = "#fff";

  constructor(private colorservice: ColourServiceService) {
    this.palette_subscription = this.colorservice.paletteChanged$.subscribe(
      data => {
        this.colors = data;
        this.updateColors();
      });

    this.background_subscription = this.colorservice.backgroundChanged$.subscribe(
      data => {
        this.background = data;
      });
  }

  ngOnInit(): void {

    this.createSvg();
    this.drawChart();
    this.updateColors()

  }

  private data = [{"name":"a","value": 9}, {"name":"b","value": 20}, {"name":"c","value":30}, {"name":"d","value":8}, {"name":"e","value":12}]

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private radius = Math.min(this.width, this.height) / 2 - this.margin;

  private createSvg(): void {
    this.svg = d3.select("figure#choropleth")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
      .append("g")
        .attr("transform", "translate(" + this.width/2 + ", " + this.height/2 + ")");
  }

  private drawChart(): void {
    var chart = this;

    const path = d3.geoPath();
    const projection = d3.geoMercator()
      .scale(70)
      .center([80,-40])
      .translate([chart.width / 2, chart.height / 2]);
    
    // Data and color scale
    let data = new Map()
    const colorScale = d3.scaleOrdinal()
      .range(this.colors);
    
    // Load external data and boot
    Promise.all([
      d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
      d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) {
          return data.set(d.code, +d.pop)
      })
    ]).then(function(loadData){
        let topo : any = loadData[0]
    
        // Draw the map
      chart.svg.append("g")
        .selectAll("path.choropleth_area")
        .data(topo.features)
        .join("path")
          // draw each country
          .attr("d", d3.geoPath()
            .projection(projection)
          )
          .attr("class", "choropleth_area")
          // set the color of each country
          .attr("fill", (d,i) => { return chart.colors[i % chart.colors.length]; })
          .attr("stroke", "#444")
          .attr("stroke-width", 0.4)
    })
  }

  private updateColors(): void{
    // change axis colors based on background lightness
    let base_color = d3.hsl(this.background).l < 0.25 ? "#eee" : "#222";
    let base_thickness = d3.hsl(this.background).l < 0.25 ? 0.4 : 0.25;

    this.svg.selectAll(".choropleth_area")
      .attr("fill", (_,i) => { return this.colors[i % this.colors.length]; })
      .attr("stroke", base_color)
      .attr("stroke-width", base_thickness);
  }

}

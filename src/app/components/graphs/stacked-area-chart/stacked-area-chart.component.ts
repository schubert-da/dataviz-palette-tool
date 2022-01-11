import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.scss']
})
export class StackedAreaChartComponent implements OnInit {
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


  private data = [
    { "name": "A", "year": "2012", "Value": "16" },
    { "name": "A", "year": "2013", "Value": "17" },
    { "name": "A", "year": "2014", "Value": "18" },
    { "name": "A", "year": "2015", "Value": "23" },
    { "name": "A", "year": "2016", "Value": "24" },
    { "name": "A", "year": "2017", "Value": "26" },
    { "name": "A", "year": "2018", "Value": "30" },
    { "name": "B", "year": "2012", "Value": "11" },
    { "name": "B", "year": "2013", "Value": "14" },
    { "name": "B", "year": "2014", "Value": "14" },
    { "name": "B", "year": "2015", "Value": "15" },
    { "name": "B", "year": "2016", "Value": "20" },
    { "name": "B", "year": "2017", "Value": "21" },
    { "name": "B", "year": "2018", "Value": "24" },
    { "name": "C", "year": "2012", "Value": "9" },
    { "name": "C", "year": "2013", "Value": "10" },
    { "name": "C", "year": "2014", "Value": "11" },
    { "name": "C", "year": "2015", "Value": "12" },
    { "name": "C", "year": "2016", "Value": "14" },
    { "name": "C", "year": "2017", "Value": "18" },
    { "name": "C", "year": "2018", "Value": "19" },
    { "name": "D", "year": "2012", "Value": "5" },
    { "name": "D", "year": "2013", "Value": "6" },
    { "name": "D", "year": "2014", "Value": "6" },
    { "name": "D", "year": "2015", "Value": "7" },
    { "name": "D", "year": "2016", "Value": "10" },
    { "name": "D", "year": "2017", "Value": "12" },
    { "name": "D", "year": "2018", "Value": "15" },
    { "name": "E", "year": "2012", "Value": "2" },
    { "name": "E", "year": "2013", "Value": "3" },
    { "name": "E", "year": "2014", "Value": "4" },
    { "name": "E", "year": "2015", "Value": "5" },
    { "name": "E", "year": "2016", "Value": "5" },
    { "name": "E", "year": "2017", "Value": "8" },
    { "name": "E", "year": "2018", "Value": "10" },
  ];
  

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {
    // This is simply multiple area charts on top of one another
    // and not how you would create an actual stacked area chart.

    this.svg = d3.select("figure#stacked-area")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;


    const x = d3.scaleTime()
    .domain(d3.extent(this.data, d => +d.year))
    .range([ 0, chart.width ]);

    this.svg.append("g")
      .attr("transform", `translate(0,${chart.height})`)
      .call(d3.axisBottom(x));
      
  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, d3.max(this.data, d => +d.Value)])
    .range([ chart.height, 0 ]);

    this.svg.append("g")
      .call(d3.axisLeft(y));
    
  for( let name of this.data.map(d => d.name)){
    
    let currentData = this.data.filter( d => d.name == name);

    // Add the area
    this.svg.append("path")
      .datum(currentData)
      .attr("fill", "#cce5df")
      .attr("class", "stacked-path")
      .attr("stroke", "#eee")
      .attr("stroke-width", 1.1)
      .attr("d", d3.area()
        .x(d => x(+d["year"])+1)
        .y0(y(0)-1)
        .y1(d => y(+d["Value"]))
        )

  } 
  }

  private updateColors(): void{
    this.svg.selectAll(".stacked-path")
      .attr("fill", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

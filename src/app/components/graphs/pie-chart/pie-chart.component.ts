import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() colors: string[];
  palette_subscription: Subscription;
  background_subscription: Subscription;
  background: string = "#fff";

  constructor(private colorservice: ColourServiceService) {
    this.palette_subscription = this.colorservice.paletteChanged$.subscribe(
      data => {
        this.colors = data;
        this.updateColors();
        // this.drawChart();
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
    this.svg = d3.select("figure#pie")
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

  // set the color scale
  const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

  // Compute the position of each group on the pie:
  const pie = d3.pie()
    .value(function(d) {return +d})

  const data_ready = pie(chart.data.map((d) => { return +d.value;} ))
  
  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  this.svg
    .selectAll('pie-slice')
    .data(data_ready)
    .join('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
    )
    .attr('fill', function(d){ return(color(d.data[1])) })
    .attr("stroke", "black")
    .attr("class", "pie-slice")
    .style("stroke-width", "0.5")
    }

  private updateColors(): void{
    this.svg.selectAll(".pie-slice")
      .attr("fill", (d,i) => { return this.colors[i % this.colors.length]; })
  }
}

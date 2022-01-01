import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as d3 from 'd3';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {
  @Input() colors: string[];
  palette_subscription: Subscription;
  background_subscription: Subscription;
  background: string = "#fff";

  constructor(private colorservice: ColourServiceService) {


    for( let i=0; i<100; i++){
      let data_value = Math.random() * 100

      let noise_param = 30;
      let noiseX = Math.random() * noise_param - (noise_param / 2)
      let noiseY = Math.random() * noise_param - (noise_param / 2)

      let row = { "x": data_value  +  noiseX, "y":data_value + noiseY, "value": Math.random() * 8 };
      this.data.push(row);
    }
    
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
  ];

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {

    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;

    const x = d3.scaleLinear()
      .domain([0, 105])
      .range([ 0, chart.width ]);

    this.svg.append("g")
      .attr("transform", `translate(0, ${chart.height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 105])
    .range([ chart.height, 0]);

    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    this.svg.append('g')
      .selectAll(".scatter_dot")
      .data(this.data)
      .join("circle")
          .attr("class", "scatter_dot" )
          .attr("cx", function (d) { return x(d.x); } )
          .attr("cy", function (d) { return y(d.y); } )
          .attr("r",  function (d) { return d.value; })
          .style("fill", "#69b3a2")
          .style("stroke", "#666")
          .style("stroke-width", 0.5)
          .style("opacity", 0.8 )
  }

  private updateColors(): void{
    this.svg.selectAll(".scatter_dot")
      .style("fill", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

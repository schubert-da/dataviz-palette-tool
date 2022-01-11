import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';
import { color } from 'd3';
import { ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-tints-shades',
  templateUrl: './tints-shades.component.html',
  styleUrls: ['./tints-shades.component.scss']
})
export class TintsShadesComponent implements OnInit {
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

  private data = [];

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {
    // This is simply multiple area charts on top of one another
    // and not how you would create an actual stacked area chart.

    this.svg = d3.select("figure#shades")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;


  const x_vals = [0,1,2,3,4,5,6]
  const y_vals = [0,1,2,3,4,5,6]

  for(let x_val of x_vals){
    for(let y_val of y_vals){
      this.data.push({"x": x_val, "y": y_val, "data": 1})
    }
  }

  // Build X scales and axis:
  const x = d3.scaleBand()
    .range([ 0, chart.width ])
    .domain(x_vals.map(d => ""+d))
    .padding(0.03);

  this.svg.append("g")
    .attr("transform", `translate(0, ${chart.height})`)
    .call(d3.axisBottom(x))

  // Build X scales and axis:
  const y = d3.scaleBand()
    .range([ chart.height, 0 ])
    .domain(y_vals.map(d => ""+d))
    .padding(0.1);

  this.svg.append("g")
    .call(d3.axisLeft(y));
    
    this.svg.selectAll()
        .data(this.data, function(d) {return d.x+'-'+d.y;})
        .join("rect")
        .attr("class", "shade-tile")
        .attr("data-row-index", d=> d.y)
        .attr("x", function(d) { return x(""+d.x) })
        .attr("y", function(d) { return y(""+d.y) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return "red"} )
  }

  private updateColors(): void{
    this.svg.selectAll(".shade-tile")
      .style("fill", (d,i) => { 
        let color = d3.hsl(this.colors[d.y % this.colors.length]);
        let new_color = d3.hsl(color.h, color.s, color.l - 0.1 * (3 - d.x));

        return new_color; 
      })
  }

}
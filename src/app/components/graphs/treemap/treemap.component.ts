import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnInit {
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
    { "name": "Origin", "parent": null, "value": null },
    { "name": "Apples", "parent": "Origin", "value": 40  },
    { "name": "Bananas", "parent": "Origin", "value": 18  },
    { "name": "Hi", "parent": "Origin", "value": 8  },
    { "name": "Peaches", "parent": "Origin", "value": 20  },
    { "name": "Tomtatoes", "parent": "Origin", "value": 32  },
    { "name": "Oranges", "parent": "Origin", "value": 10  },
  ];
  

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {

    this.svg = d3.select("figure#treemap")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }
  

  private drawChart(): void {
    var chart = this;
    const root = d3.stratify()
    .id(function(d) {  console.log(d["name"]); return d["name"]; })   // Name of the entity (column name is name in csv)
    .parentId(function(d) { return d["parent"]; })   // Name of the parent (column name is parent in csv)
    (this.data);

  root.sum(function(d) { return +d["value"] })   // Compute the numeric value for each entity

  // Then d3.treemap computes the position of each element of the hierarchy
  // The coordinates are added to the root object above
  d3.treemap()
    .size([chart.width, chart.height])
    .padding(3)
    (root)

  // use this information to add rectangles:
  this.svg
    .selectAll(".treemap_rect")
    .data(root.leaves())
    .join("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('class', "treemap_rect")
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "#222")
      .style("stroke-width", 0.75)
      .style("fill", "#69b3a2");

  // and to add the text names
  this.svg
    .selectAll("text")
    .data(root.leaves())
    .join("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+15})    // +20 to adjust position (lower)
      .text(function(d){ return d.data.name})
      .attr("font-size", "15px")
      .attr("fill", "white")
  }

  private updateColors(): void{
    this.svg.selectAll(".treemap_rect")
      .style("fill", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

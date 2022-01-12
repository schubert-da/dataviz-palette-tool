import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
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

  
  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {
    this.svg = d3.select("figure#typography")
      .append("div")
  }

  private drawChart(): void {
    var chart = this;

      
    // Bars
    this.svg.selectAll(".typo")
      .data(this.colors)
      .enter()
      .append()
      .html(d => {
        let hsl_color = d3.hsl(d);
        var highlight_text_color = hsl_color.l > 0.9? "#666" : "#fff";

        return `Some choose to highlight <b style="color: ${d}">like this</b>, 
        while others <b style="background-color: ${d}; color: ${highlight_text_color}; padding: 1px 3px">prefer this</b><br>`
      }
        )
      .attr("class","typo")
      .style("font-size","1.0em")

  }

  private updateColors(): void{
    this.svg.selectAll(".typo")
      .data(this.colors)
      .enter()
      .append()
      .html(d => {
        let hsl_color = d3.hsl(d);
        var highlight_text_color = hsl_color.l > 0.9? "#666" : "#fff";

        return `Some choose to highlight <b style="color: ${d}">like this</b>, 
        while others <b style="background-color: ${d}; color: ${highlight_text_color}; padding: 1px 3px">prefer this</b><br>`
      }
        )
      .attr("class","typo")
      .style("font-size","1.0em")
  }
}

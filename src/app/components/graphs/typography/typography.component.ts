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

  
  private container;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {
    this.container = d3.select("figure#typography")
      .append("div")
  }

  private drawChart(): void {
    this.container.selectAll(".typo")
      .data(this.colors, (_,i) => i)
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
      .exit()
      .remove()

  }

  private updateColors(): void{
    // adjust the color of non-highlighted text based on whether the bg is light or dark
    let base_font_color = d3.hsl(this.background).l < 0.25 ? "#aaa" : "#222";

    // remove all lines of text
    this.container.selectAll(".typo").remove()

    this.container.selectAll(".typo")
      .data(this.colors, (_, i)=> i)
      .enter()
      .append()
      .html(d => {
        let hsl_color = d3.hsl(d);
        var highlight_text_color = hsl_color.l > 0.9? "#666" : "#fff"; // adjust color of highlighted text based on highlight bg

        return `<span style="color: ${base_font_color}">Some choose to highlight <b style="color: ${d}">like this</b>, 
        while others <b style="background-color: ${d}; color: ${highlight_text_color}; padding: 1px 3px">prefer this</b></span><br>
        <p style='color: ${d}'>
        <span style='font-weight:100'>When the font</span> <span style='font-weight:400'>weights are getting</span> <span style='font-weight:600'> increasingly bolder </span> <span style='font-weight:bolder'> in said color. </span>
        </p>`
      }
        )
      .attr("class","typo")
      .style("font-size","1.0em")
      .exit()
      .remove()
  }
}

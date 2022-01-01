import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import { pairwise, switchMap, take } from 'rxjs/operators';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() colors: string[];
  palette_subscription: Subscription;
  background_subscription: Subscription;
  background: string = "#fff";

  constructor(private colorservice: ColourServiceService) {
    this.palette_subscription = this.colorservice.paletteChanged$.subscribe(
      data => {
        this.colors = data;
        console.log(this.colors);
        this.updateColors();
        // this.drawChart();
      });

    this.background_subscription = this.colorservice.backgroundChanged$.subscribe(
      data => {
        this.background = data;
        // console.log(this.background)
      });
  }

  ngOnInit(): void {

    this.createSvg();
    this.drawChart();
    this.updateColors()

  }


  private data = [
    { "Label": "A", "Value": "5"  },
    { "Label": "B", "Value": "40"  },
    { "Label": "C", "Value": "35"  },
    { "Label": "D", "Value": "15"  },
    { "Label": "F", "Value": "30"  },
    { "Label": "G", "Value": "14"  },
  ];
  
  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;
    // Build the pie chart
    var x = d3.scaleBand()
      .range([this.margin, this.width - this.margin])
      .domain(this.data.map(function (d) { return d.Label; }))
      .padding(0.075);

    this.svg.append("g")
      .attr("transform", "translate(0," + (this.height - this.margin) + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(0,0) rotate(0)")
      .style("text-anchor", "middle");

    var range = d3.extent(this.data.map( d => +d.Value) )

    var y = d3.scaleLinear()
      .domain([0, +range[1]])
      .range( [ this.height - this.margin, this.margin ] )
      .nice();

    this.svg.append("g")
      .attr("transform", "translate(" + this.margin + ",0)")
      .call(d3.axisLeft(y).ticks(5));

      
    // Bars
    this.svg.selectAll(".bars")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("class","bars")
      .attr("x", function (d) { return +x(d.Label); })
      .attr("y", function (d) { return 0 + y(d.Value); })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return +chart.height - y(+d.Value) - chart.margin; })
      .attr("fill", "#69b3a2")

  }

  private updateColors(): void{
    this.svg.selectAll(".bars")
      .attr("fill", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

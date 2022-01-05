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
        this.upyearColors();
      });

    this.background_subscription = this.colorservice.backgroundChanged$.subscribe(
      data => {
        this.background = data;
      });
  }

  ngOnInit(): void {
    this.createSvg();
    this.drawChart();
    this.upyearColors()
  }


  private data = [
    { "name": "A", "year": "2012", "Value": "25" },
    { "name": "A", "year": "2013", "Value": "40" },
    { "name": "A", "year": "2014", "Value": "35" },
    { "name": "A", "year": "2015", "Value": "30" },
    { "name": "A", "year": "2016", "Value": "20" },
    { "name": "A", "year": "2017", "Value": "20" },
    { "name": "A", "year": "2018", "Value": "15" },
    { "name": "B", "year": "2012", "Value": "15" },
    { "name": "B", "year": "2013", "Value": "30" },
    { "name": "B", "year": "2014", "Value": "14" },
    { "name": "B", "year": "2015", "Value": "15" },
    { "name": "B", "year": "2016", "Value": "20" },
    { "name": "B", "year": "2017", "Value": "30" },
    { "name": "B", "year": "2018", "Value": "32" },
    { "name": "C", "year": "2012", "Value": "15" },
    { "name": "C", "year": "2013", "Value": "20" },
    { "name": "C", "year": "2014", "Value": "18" },
    { "name": "C", "year": "2015", "Value": "15" },
    { "name": "C", "year": "2016", "Value": "12" },
    { "name": "C", "year": "2017", "Value": "18" },
    { "name": "C", "year": "2018", "Value": "19" },
    { "name": "D", "year": "2012", "Value": "5" },
    { "name": "D", "year": "2013", "Value": "6" },
    { "name": "D", "year": "2014", "Value": "8" },
    { "name": "D", "year": "2015", "Value": "8" },
    { "name": "D", "year": "2016", "Value": "12" },
    { "name": "D", "year": "2017", "Value": "12" },
    { "name": "D", "year": "2018", "Value": "17" },
    { "name": "E", "year": "2012", "Value": "48" },
    { "name": "E", "year": "2013", "Value": "36" },
    { "name": "E", "year": "2014", "Value": "38" },
    { "name": "E", "year": "2015", "Value": "38" },
    { "name": "E", "year": "2016", "Value": "32" },
    { "name": "E", "year": "2017", "Value": "28" },
    { "name": "E", "year": "2018", "Value": "22" },
  ];
  

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 

  private createSvg(): void {

    this.svg = d3.select("figure#stacked-area")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;

    /*
    var sumstat = d3.group(this.data, d => d.year);
    var sumstat2 = [...sumstat].map(([name, value]) => ({ name, value }))
    // console.log(sumstat2)
  // Stack the data: each group will be represented on top of each other
  const mygroups = ["A","B","C","D","E"] // list of group names
  const mygroup = ["0","1","2","3","4"] // list of group names
  // const years = ["2012", "2013", "2014", "2015", "2016", "2017", "2018"]

  const stackedData : any = d3.stack()
    .keys(mygroup)
    .value(function(d, key){
      // console.log(key)
      // console.log(d);
      // console.log(key);
      return d[1][key].Value;
    })
    (sumstat2)

  // Add X axis --> it is a year format
  const x = d3.scaleLinear()
    .domain(d3.extent(this.data, function(d) { return +d.year; }))

    .range([ 0, chart.width ]);
  this.svg.append("g")
    .attr("transform", `translate(0, ${chart.height})`)
    .call(d3.axisBottom(x).ticks(5));

  console.log("max " + d3.max(this.data, function(d) { return +d.Value; }))
  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 135])
    .range([ chart.height, 0 ]);
  this.svg.append("g")
    .call(d3.axisLeft(y));

  // console.log(Array.from(stackedData))
    
  // Show the areas
  this.svg
    .selectAll(".stacked-path")
    .data(Array.from(stackedData))
    .join("path")
      .attr("class","stacked-path")
      .style("fill", (d,i) => { return this.colors[i % this.colors.length]; })
      .attr("d", d3.area()
        .x(function(d, i) { return x(+d["data"][0]); })
        .y0(function(d) { console.log(+d[1]); return y(+d[0]); })
        .y1(function(d) { return y(+d[1]); })
    )
    */
  }

  private upyearColors(): void{
    this.svg.selectAll(".stacked-path")
      .attr("stroke", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

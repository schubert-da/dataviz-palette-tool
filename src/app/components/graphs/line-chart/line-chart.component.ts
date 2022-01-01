import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
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


  private raw_data = [
    { "Label": "A", "date": 2012, "Value": 25 },
    { "Label": "A", "date": 2013, "Value": 40  },
    { "Label": "A", "date": 2014, "Value": 35  },
    { "Label": "A", "date": 2015, "Value": 30  },
    { "Label": "A", "date": 2016, "Value": 20  },
    { "Label": "A", "date": 2017, "Value": 20  },
    { "Label": "A", "date": 2018, "Value": 15  },
    { "Label": "B", "date": 2012, "Value": 15  },
    { "Label": "B", "date": 2013, "Value": 30  },
    { "Label": "B", "date": 2014, "Value": 14  },
    { "Label": "B", "date": 2015, "Value": 15  },
    { "Label": "B", "date": 2016, "Value": 20  },
    { "Label": "B", "date": 2017, "Value": 30  },
    { "Label": "B", "date": 2018, "Value": 32  },
    { "Label": "C", "date": 2012, "Value": 15  },
    { "Label": "C", "date": 2013, "Value": 20  },
    { "Label": "C", "date": 2014, "Value": 18  },
    { "Label": "C", "date": 2015, "Value": 15  },
    { "Label": "C", "date": 2016, "Value": 12  },
    { "Label": "C", "date": 2017, "Value": 18  },
    { "Label": "C", "date": 2018, "Value": 19  },
    { "Label": "D", "date": 2012, "Value": 5  },
    { "Label": "D", "date": 2013, "Value": 6  },
    { "Label": "D", "date": 2014, "Value": 8  },
    { "Label": "D", "date": 2015, "Value": 8  },
    { "Label": "D", "date": 2016, "Value": 12  },
    { "Label": "D", "date": 2017, "Value": 12  },
    { "Label": "D", "date": 2018, "Value": 17  },
    { "Label": "E", "date": 2012, "Value": 48  },
    { "Label": "E", "date": 2013, "Value": 36  },
    { "Label": "E", "date": 2014, "Value": 38  },
    { "Label": "E", "date": 2015, "Value": 38  },
    { "Label": "E", "date": 2016, "Value": 32  },
    { "Label": "E", "date": 2017, "Value": 28  },
    { "Label": "E", "date": 2018, "Value": 22  },
  ];
  

  private svg;
  private margin: number = 20;
  private width: number = 200;
  private height: number = 200; 
  private data;

  private createSvg(): void {
    this.data = this.raw_data.map( d =>{ return {
      Label: d["Label"],
      date: d3.timeParse("%Y")(d["date"]+""),
      Value: d["Value"]
    }})

    this.svg = d3.select("figure#line")
      .append("svg")
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+Math.min(this.width,this.height)+' '+Math.min(this.width,this.height))
      .attr('preserveAspectRatio','xMinYMin')
  }

  private drawChart(): void {
    var chart = this;
    var range = d3.extent(this.data.map( d => +d.Value) )

    // group the data: I want to draw one line per group
  const sumstat = d3.group(this.data, d => { return d["Label"]}); // nest function allows to group the calculation per level of a factor

    var x = d3.scaleTime()
    .domain(d3.extent(this.data, function(d) { return +d["date"]; }))
    .range([this.margin, this.width - this.margin])
      
    this.svg.append("g")
      .attr("transform", "translate(0," + (this.height - this.margin) + ")")
      .call(d3.axisBottom(x).ticks(4))
      .selectAll("text")
      .attr("transform", "translate(0,0) rotate(0)")
      .style("text-anchor", "middle")
      .style("font-size", "9px");

    var y = d3.scaleLinear()
      .domain([0, +range[1]])
      .range( [ this.height - this.margin, this.margin ] )
      .nice();

    this.svg.append("g")
      .attr("transform", "translate(" + this.margin + ",0)")
      .call(d3.axisLeft(y).ticks(6));

      this.svg.selectAll(".lines")
      .data(sumstat)
      .join("path")
        .attr("class","lines")
        .attr("fill", "none")
        .attr("stroke", "#222")
        .attr("stroke-width", 2)
        .attr("d", function(d){
          return d3.line()
            .x((b) => { return x(b["date"]); })
            .y((b) => { return y(b["Value"]); })
            (d[1])
        })

  }

  private updateColors(): void{
    this.svg.selectAll(".lines")
      .attr("stroke", (d,i) => { return this.colors[i % this.colors.length]; })
  }

}

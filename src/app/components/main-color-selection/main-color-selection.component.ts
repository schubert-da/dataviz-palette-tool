import { Component, OnInit } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { cpuUsage } from 'process';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-main-color-selection',
  templateUrl: './main-color-selection.component.html',
  styleUrls: ['./main-color-selection.component.scss']
})
export class MainColorSelectionComponent implements OnInit {

  color: string;
  num_colors: number = 4;
  list: number[] = [0,1,2,3,4];
  color_list: string[] = [];
  background: string = "#ffffff";

  default_palette: string[] = ["#4F091D", "#DD4A48", "#F5EEDC", "#97BFB4"]

  constructor( private colourservice: ColourServiceService) { 
    

  }

  ngOnInit(): void {
    this.list = Array.from({ length: this.num_colors }, (_, i) => i)
    this.color_list = Array.from({ length: this.num_colors }, (_, i) => this.default_palette[i % 4])
    console.log(this.list);
  }

  colorPickerChanged(){
    this.colourservice.changePalette([...this.color_list, this.background]);
  }

  numColorsChange(event){
    this.list = Array.from({ length: event.target.value }, (_, i) => i).slice()

    this.color_list = Array.from({ length: event.target.value }, (_, i) => this.color_list[i]);
    this.color_list = this.color_list.map(color => color === undefined ? "#ffffff" : color);

    this.colourservice.changePalette([...this.color_list, this.background]);
    console.log(this.color_list)
  }

  colorChanged(event){
    let color:string = event.target.value;
    let index = event.target.dataset.index;

    if( index == "background" ){
      this.background = color;
    }
    else{
      this.color_list[index] = color;
      this.colorPickerChanged();
    }
  }

}

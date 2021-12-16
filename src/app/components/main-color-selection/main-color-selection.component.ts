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

  constructor( private colourservice: ColourServiceService) { 
    

  }

  ngOnInit(): void {
    this.createColorList();
  }

  createColorList(){
    this.color_list = [" "," "," "," "," "] 
  }

  colorPickerChanged(){
    this.colourservice.changePalette([...this.color_list, this.background]);
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

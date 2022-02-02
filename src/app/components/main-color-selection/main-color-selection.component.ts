import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-main-color-selection',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0, "overflow-y": "hidden"}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 1, "overflow-y": "hidden"}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('50ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './main-color-selection.component.html',
  styleUrls: ['./main-color-selection.component.scss']
})
export class MainColorSelectionComponent implements OnInit {

  color: string;
  num_colors: number = 4;
  list: number[] = [0,1,2,3,4];
  color_list: string[] = [];
  background: string = "#efefef";

  isCollapsed: boolean = false;

  default_palette: string[] = ["#4F091D", "#DD4A48", "#F5EEDC", "#97BFB4"]

  constructor( private colourservice: ColourServiceService) { 
  }

  ngOnInit(): void {
    this.list = Array.from({ length: this.num_colors }, (_, i) => i)
    this.color_list = Array.from({ length: this.num_colors }, (_, i) => this.default_palette[i % 4]);
  }

  colorPickerChanged(){
    this.colourservice.changePalette([...this.color_list, this.background]);
  }

  numColorsChange(event){
    this.list = Array.from({ length: event.target.value }, (_, i) => i).slice()

    this.color_list = Array.from({ length: event.target.value }, (_, i) => this.color_list[i]);
    this.color_list = this.color_list.map(color => color === undefined ? this.color_list[this.color_list.length-2] : color);

    this.colourservice.changePalette([...this.color_list, this.background]);
  }

  colorChanged(event){
    let color:string = event.target.value;
    let index = event.target.dataset.index;

    if( index == "background" ){
      this.background = color;
      this.colorPickerChanged();
    }
    else{
      this.color_list[index] = color;
      this.colorPickerChanged();
    }
  }

  // Update colors when event is emitted from import colours component.
  updateImportedColors(event){
    this.color_list = Array.from(event);
    
    // Change the index list for the color pickers for the palette
    this.list = event.slice().map((_,i) => i);

    // Update palette and background colors
    this.color_list = event.slice();
    this.num_colors = this.color_list.length;

    this.colourservice.changePalette([...this.color_list, this.background]);

    this.isCollapsed = false;
  }

}

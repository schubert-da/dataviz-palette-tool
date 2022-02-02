import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-import-colors',
  templateUrl: './import-colors.component.html',
  styleUrls: ['./import-colors.component.scss']
})
export class ImportColorsComponent implements OnInit {
  @Input() colors: string[]; 
  @Output() colorImported = new EventEmitter<String[]>();

  ngOnInit(): void {
  }

  importColors(event): void { 
    let textbox = document.getElementById("import-color-list") as HTMLInputElement;
    let color_input = textbox.value;
    let color_list: string[];
    let find;

    // remove brackets if any
    color_input = color_input.replace("[", '')
    color_input = color_input.replace("]", '')

    let is_comma_delimited = color_input.indexOf(",") !==-1;

    // If there is at least one comma, we treat the color list as comma delimited
    if(is_comma_delimited){
      find = '[#"\'\\s]*';
      let re = new RegExp(find, 'g');
      color_input = color_input.replace(re, '');
      color_list = color_input.split(",")
    }

    // when list is space delimited
    else{ 
      find = '[#"\'\]*';
      let re = new RegExp(find, 'g');
      color_input = color_input.replace(re, '');
      color_list = color_input.split(" ")
    }

    // Add the # again to get list of hex codes
    color_list = color_list.map(function (currentElement) {
      return "#"+currentElement;
    });
    
    this.colorImported.emit(color_list);

  }

  cancel(){
    this.colorImported.emit(this.colors);
  }

}

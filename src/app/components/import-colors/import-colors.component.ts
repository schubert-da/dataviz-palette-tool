import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-import-colors',
  templateUrl: './import-colors.component.html',
  styleUrls: ['./import-colors.component.scss']
})
export class ImportColorsComponent implements OnInit {
  @Input() colors: string[]; 
  @Output() colorImported = new EventEmitter<String[]>();

  constructor( private colourservice: ColourServiceService) { 
  }

  ngOnInit(): void {
  }

  importColors(event): void { 
    let textbox = document.getElementById("import-color-list") as HTMLInputElement;
    let color_input = textbox.value;
    
    // replace operations to get a list of hex values
    color_input = color_input.replace("[", '')
    color_input = color_input.replace("]", '')

    var find = '[#"\'\s]*'; // removing # so that colors with/ wo # are treated the same
    var re = new RegExp(find, 'g');
    color_input = color_input.replace(re, '');

    let color_list = color_input.split(",")

    // Add the # again to get list of hex codes
    color_list = color_list.map(function (currentElement) {
      return "#"+currentElement;
    });
    
    this.colorImported.emit(color_list);

  }

}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataviz-palette-tool';
  main_color: string = "cadetblue";

  default_palette: string[] = ["#4F091D", "#DD4A48", "#f7f3e8", "#97BFB4"];

  // Allow sticky positioning for main color selection
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.scrollY > document.getElementById('intro').offsetHeight) {

      let main_selection = document.getElementById('main-selection');
      main_selection.style.position="fixed";
      main_selection.style.top = "0";

      document.getElementById("main").style.marginTop =  (document.getElementById('main-selection').offsetHeight + 20)+"px";

     } else {
      let main_selection = document.getElementById('main-selection');
      main_selection.style.position="static";

      document.getElementById("main").style.marginTop="0";
     }
  }

  // Handle change for main site color
  colorPickerChanged(event){
    let color:string = event;

    var viz_headers = document.querySelectorAll<HTMLElement>('.viz-header');

    for (var i = 0; i < viz_headers.length; i++) {
        var currentEl = viz_headers[i];
        currentEl.style.background = color;
    }

    document.getElementById("main-selection").style.background = color;
  }
  
}

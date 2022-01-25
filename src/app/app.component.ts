import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataviz-palette-tool';

  default_palette: string[] = ["#4F091D", "#DD4A48", "#f7f3e8", "#97BFB4"];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.scrollY > window.innerHeight * ( 30 / 100)) {

      let main_selection = document.getElementById('main-selection');
      main_selection.style.position="fixed";
      main_selection.style.top = "0";

      document.getElementById("main").style.marginTop="9%";

     } else {
      let main_selection = document.getElementById('main-selection');
      main_selection.style.position="static";

      document.getElementById("main").style.marginTop="0";
     }
  }
  
}

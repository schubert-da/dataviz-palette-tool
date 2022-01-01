import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dataviz-palette-tool';

  default_palette: string[] = ["#4F091D", "#DD4A48", "#F5EEDC", "#97BFB4"];
}

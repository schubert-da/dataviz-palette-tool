import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-svg-test',
  templateUrl: './svg-test.component.html',
  styleUrls: ['./svg-test.component.scss']
})
export class SvgTestComponent implements OnInit {

  @Input() colors: string[];
  palette_subscription: Subscription;
  background_subscription: Subscription;
  background: string = "#fff";

  constructor(private colorservice: ColourServiceService) {
    this.palette_subscription = this.colorservice.paletteChanged$.subscribe(
      data => {
        this.colors = data;
        console.log(this.colors);
        // this.updateColors();
      });

    this.background_subscription = this.colorservice.backgroundChanged$.subscribe(
      data => {
        this.background = data;
      });
  }

  ngOnInit(): void {
  }

}

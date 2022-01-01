import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColourServiceService } from 'src/app/services/colour-service.service';

@Component({
  selector: 'app-viz-container',
  templateUrl: './viz-container.component.html',
  styleUrls: ['./viz-container.component.scss']
})
export class VizContainerComponent implements OnInit {
  background: string;
  background_subscription: Subscription;

  constructor( private colorservice: ColourServiceService ) { }

  ngOnInit(): void {
    this.background_subscription = this.colorservice.backgroundChanged$.subscribe(
      data => {
        this.background = data;
      });
  }

}

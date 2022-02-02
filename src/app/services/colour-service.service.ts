import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourServiceService {

  palette = new Subject<string[]>();
  private background = new Subject<string>();

  // Observable string streams
  paletteChanged$ = this.palette.asObservable();
  backgroundChanged$ = this.background.asObservable();

  // Update palette and backgrounds
  changePalette(palette: string[]) {
    this.palette.next(palette.slice(0, palette.length - 1));
    this.background.next(palette.slice(-1)[0]);
  }
}

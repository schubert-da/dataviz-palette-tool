import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourServiceService {

  constructor() { }

  
   palette = new Subject<string[]>();
  private background = new Subject<string>();

  // Observable string streams
  paletteChanged$ = this.palette.asObservable();
  backgroundChanged$ = this.background.asObservable();

  // Service message commands
  changePalette(palette: string[]) {
    this.palette.next(palette.slice(0, palette.length - 1));
    this.background.next(palette.slice(-1)[0]);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourServiceService {

  constructor() { }

  private palette = new Subject<string[]>();

  // Observable string streams
  paletteChanged$ = this.palette.asObservable();

  // Service message commands
  changePalette(palette: string[]) {
    this.palette.next(palette);
  }
}

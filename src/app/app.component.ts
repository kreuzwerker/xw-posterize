import { Component } from '@angular/core';
import {RgbaObject} from 'hex-rgb';



class Preset {
  name: string;
  colors: RgbaObject[]
  constructor(name: string, colors: RgbaObject[]) {
    this.name = name;
    this.colors = colors;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posterize';
  presets: Preset[] = [];
}

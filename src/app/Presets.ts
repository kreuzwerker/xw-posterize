import {RgbaObject} from 'hex-rgb';



export class Preset {
  name: string;
  colors: RgbaObject[]
  constructor(name: string, colors: RgbaObject[]) {
    this.name = name;
    this.colors = colors;
  }
}

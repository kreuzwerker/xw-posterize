import {RgbaObject} from 'hex-rgb';
import {Gradient} from './Gradient';



export interface Preset {
  name: string;
  colors: RgbaObject[]

}

export class GradientPreset implements Preset {
  name: string;
  private gradient:  Gradient
  get colors(): RgbaObject[] {
    return this.gradient.colors;
  }
  constructor(name: string, gradient: Gradient) {
    this.name = name;
    this.gradient = gradient;
  }
}

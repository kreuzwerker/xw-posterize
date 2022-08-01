import hexRgb, {RgbaObject} from 'hex-rgb';

// calculations stolen from https://github.com/aurer/jsgradient/blob/master/js/jsGradient.js
export class Gradient {

  start: string;
  end: string;
  steps: number;
  private _colors: RgbaObject[] | null = null;

  get colors() : RgbaObject[] {
    return this._colors ? this._colors : this.generateGradient();
  }

  constructor(startColor: string, endColor: string, steps: number) {
    this.start = startColor;
    this.end = endColor;
    this.steps = steps;
    //this.colors = Gradient.generateGradient(startColor, endColor, steps);
  }

  private generateGradient(): RgbaObject[] {
    const result: RgbaObject[] = [];

    const colorA = hexRgb(this.start);
    const colorB = hexRgb(this.end);
    const steps = this.steps - 1; // Reduce the steps by one because we're including the first item manually

    // Calculate the intervals for each color
    const rStep = (Math.max(colorA.red, colorB.red) - Math.min(colorA.red, colorB.red)) / steps;
    const gStep = (Math.max(colorA.green, colorB.green) - Math.min(colorA.green, colorB.green)) / steps;
    const bStep = (Math.max(colorA.blue, colorB.blue) - Math.min(colorA.blue, colorB.blue)) / steps;

    result.push(colorA);

    // Set the starting value as the first color value
    let rVal = colorA.red,
      gVal = colorA.green,
      bVal = colorA.blue;

    // Loop over the steps-1 because we're including the last value manually to ensure it's accurate
    for (let i = 0; i < (steps - 1); i++) {
      // If the first value is lower than the last - increment up otherwise increment down
      rVal = (colorA.red < colorB.red) ? rVal + Math.round(rStep) : rVal - Math.round(rStep);
      gVal = (colorA.green < colorB.green) ? gVal + Math.round(gStep) : gVal - Math.round(gStep);
      bVal = (colorA.blue < colorB.blue) ? bVal + Math.round(bStep) : bVal - Math.round(bStep);
      result.push({red: rVal, green: gVal, blue: bVal, alpha: 1});

    }
    result.push(colorB);
    this._colors = result;
    return result;
  }
}


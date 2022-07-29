import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Preset} from '../Presets';
import hexRgb, {RgbaObject} from 'hex-rgb';

//TODO add more colors
const presets: Preset[] = [
  new Preset('xw', [hexRgb('#C80531'), hexRgb('#B7AD8D')]),
  new Preset('1',[hexRgb('#b9172e') , hexRgb('#b7ad8d')]),
  new Preset('2',[hexRgb('#424242') , hexRgb('#b7ad8d')]),
  new Preset('3',[hexRgb('#b9172e') , hexRgb('#c4df9b')]),
  new Preset('4',[hexRgb('#b76313') , hexRgb('#c4df9b')]),
  new Preset('5',[hexRgb('#8e0e5a') , hexRgb('#b7ad8d')]),
  new Preset('6',[hexRgb('#bd3b88') , hexRgb('#e9903b')]),
  new Preset('7',[hexRgb('#424242') , hexRgb('#e9903b')]),
  new Preset('8',[hexRgb('#424242') , hexRgb('#b9172e')]),
];

@Component({
  selector: 'app-preset-list',
  templateUrl: './preset-list.component.html',
  styleUrls: ['./preset-list.component.css']
})
export class PresetListComponent implements OnInit {
  items: Preset[] = presets;
  @Input()
  enabled: boolean = false;
  @Output()
  selectedPreset: EventEmitter<Preset> = new EventEmitter<Preset>();

  chooseMe(choosen: Preset) {
    this.selectedPreset.emit(choosen);
  }

  rgba2CssHex(color : RgbaObject) : string {
    const {red, green, blue} = color;
    return '#' + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
  }
  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Preset} from '../Presets';
import {RgbaObject} from 'hex-rgb';
import {Gradient} from '../Gradient';

const presets: Preset[] = [
  new Preset('1', new Gradient('#b9172e','#b7ad8d', 16).colors),
  new Preset('2', new Gradient('#424242','#b7ad8d', 16).colors),
  new Preset('3', new Gradient('#b9172e','#c4df9b', 16).colors),
  new Preset('4', new Gradient('#b76313','#c4df9b', 16).colors),
  new Preset('5', new Gradient('#8e0e5a','#b7ad8d', 16).colors),
  new Preset('6', new Gradient('#bd3b88','#e9903b', 16).colors),
  new Preset('7', new Gradient('#424242','#e9903b', 16).colors),
  new Preset('8', new Gradient('#424242','#b9172e', 16).colors),
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

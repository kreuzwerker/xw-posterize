import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  @Input()
  id: string = '';
  show: boolean = false;
  @Input()
  source: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

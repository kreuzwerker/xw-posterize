import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {
  file: File | undefined;

  @Output()
  droppedFile = new EventEmitter<File>();

  @HostBinding('class.mat-elevation-z12')
  mouseOver: boolean = false;

  // dragover needs to be preventDefault()
  @HostListener('dragover', ['$event'])
  dragEntered(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.mouseOver = true;
  }

  @HostListener('dragleave', ['$event'])
  dragLeft(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.mouseOver = false;
  }
  @HostListener('drop', ['$event'])
  fileDropped(ev: DragEvent ) {
    ev.preventDefault();
    ev.stopPropagation();
    this.mouseOver = false;
    const file : File = ev.dataTransfer!.files[0];
    this.file = file;
    this.droppedFile.emit(file);

  }

  constructor() {
  }

}

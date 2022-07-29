import {Component, OnInit} from '@angular/core';
import {Preset} from './Presets';
import {getPixels, savePixels} from 'ndarray-pixels';
// @ts-ignore
import posterize from 'posterize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.fileReader.onloadend = () => {
      this.orgImgagedata = this.fileReader.result;
      this.isOriginalAvailable = true;
    };
    this.posterReader.onloadend = () => {
      this.posterImgagedata = this.posterReader.result;
      this.isPosterAvailable = true;
    }
  }


  title = 'posterize';
  orgFileName: string = '';
  orgMimeType: string = '';

  //these are DataURLs!
  orgImgagedata: string | ArrayBuffer | null | undefined;
  posterImgagedata: string | ArrayBuffer | null | undefined;
  isOriginalAvailable: boolean = false;
  isPosterAvailable: boolean = false;

  //TODO: consider to make a service from these:
  private fileReader = new FileReader();
  private posterReader = new FileReader();

  fileClicked(event: { target: any; }) { // FileList //
    const file: File = event.target.files[0];
    this.fillImageCache(file);
  }

  fileDropped(file: File) {
    this.fillImageCache(file);
  }

  fillImageCache(file: File) {
    //TODO check mimetype
    this.orgFileName = file.name;
    this.orgMimeType = file.type;
    this.fileReader.readAsDataURL(file);
  }

  posterize(preset: Preset) {
    this.isPosterAvailable = false;
    getPixels(this.orgImgagedata as string, this.orgMimeType ).then((pixels) => {
        const poster = posterize(pixels, preset.colors);
        savePixels(poster, this.orgMimeType).then(rawData => {
          const blob = new Blob([rawData.buffer], {type: this.orgMimeType});
          this.posterReader.readAsDataURL(blob)
        })
    })
  }


}

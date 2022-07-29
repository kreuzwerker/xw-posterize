import {Component, OnInit, Output} from '@angular/core';
import {Preset} from './Presets';
import getPixels from "get-pixels";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.fileReader.onloadend = () => {
      console.log('done reading: ', typeof this.fileReader.result);
      this.orgImgagedata = this.fileReader.result;
      this.isOriginalAvailable = true;
    };
  }

  title = 'posterize';
  fileName: string = '';
  orgImgagedata: string | ArrayBuffer | null | undefined;
  posterImgagedata: string | ArrayBuffer | null | undefined;
  isOriginalAvailable: boolean = false;
  isPosterAvailable: boolean = false;
  private fileReader = new FileReader();

  fileClicked(event: { target: any; }) { // FileList //
    const file: File = event.target.files[0];
    this.fillImageCache(file);

  }

  fileDropped(file: File) {
    this.fillImageCache(file);
  }

  fillImageCache(file: File) {
    //TODO check mimetype
    this.fileName = `${file.name} (${file.type})`;
    this.fileReader.readAsDataURL(file);
  }

  posterize(preset: Preset) {
    console.log('shall posterize: ', preset);
    getPixels('./goose.jpg', function(err, pixels) {

      Object.entries(presets).forEach(([name, colours]) => {
        const poster = posterize(pixels, colours);
        savePixels(poster, 'jpg').pipe(fs.createWriteStream(`./goose_${name}.jpg`));
      })

    });
  }

  showOrgImage(file: File) {

  }

}

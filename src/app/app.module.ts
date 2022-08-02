import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {ImageDisplayComponent} from './image-display/image-display.component';
import {FileDropDirective} from './file-drop.directive';
import {PresetListComponent} from './preset-list/preset-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PresetListComponent,
    FileDropDirective,
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatFormFieldModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

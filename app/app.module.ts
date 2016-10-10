import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import 'select2';
import { Select2Component } from 'ng2-select2/';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';
import { SelectTwoComponent } from "./select2/select2.component";
import { UploadFilesComponent } from "./uploadFiles/uploadFiles.component";
import {datetimePickerComponent} from "./datetimepicker/datetimepicker.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    Select2Component,
    UploadFilesComponent,
    SelectTwoComponent,
    datetimePickerComponent,
    UPLOAD_DIRECTIVES
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

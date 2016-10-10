import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'upload-file',
  templateUrl: 'uploadFiles.component.html'
})
export class UploadFilesComponent implements OnInit {
  private zone: NgZone;
  private basicOptions: Object;
  private progress: number = 0;
  private response: any = {};

  ngOnInit() {
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.basicOptions = {
      url: 'http://api.ng2-uploader.com:10050/upload'
    };
  }

  handleUpload(data: any): void {
    this.zone.run(() => {
      this.response = data;
      this.progress = data.progress.percent / 100;
    });
  }
}
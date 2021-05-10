import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadedFiles: any[] = [];


  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  apiUploadURL: string = 'http://localhost:5000/api/upload-dataset'

  constructor(private http: HttpClient) { }

  @Output() tabChangeEvent = new EventEmitter<number>();

  @Output() uploadEvent = new EventEmitter<string>();

  async onUpload(event) {
    let csvFile = new Blob([event.files[0]], { type: 'text/csv' })
    let formData = new FormData();
    formData.append('csvFile', csvFile, 'original.csv')
    try {
      console.log(this.apiUploadURL)
      let response = await this.http.post(this.apiUploadURL, formData).toPromise()

      this.tabChangeEvent.emit(1);
      this.uploadEvent.emit(response['success'])

    } catch (e) {
      console.log(e.error)
    }
  }

}

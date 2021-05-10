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

  onUpload(event) {
    let input =event.files[0]
    let reader = new FileReader();
    reader.readAsText(input)

    reader.onload = () => {
      console.log(reader.result)
    }
  }

}

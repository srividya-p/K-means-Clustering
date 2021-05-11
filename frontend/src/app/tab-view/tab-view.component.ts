import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent {

  activeIndex: number = 0;
  csvObject: any;
  apiPreprocessURL: string = 'http://localhost:5000/api/preprocess-dataset';
  showPreprocessed:boolean = false;
  showClusters:boolean = false;
  clusterResult:any;

  constructor(private http: HttpClient) { }

  @Output() uploadEvent = new EventEmitter<string>();

  receiveActiveIndex($event) {
    this.activeIndex = $event
  }

  receiveClusters($event) {
    this.clusterResult = $event;
    this.showClusters = true;
  }

  sendMessage($event) {
    this.uploadEvent.emit($event)
  }

  onPreprocessClick($event) {
    console.log(this.apiPreprocessURL)
    this.http.get(this.apiPreprocessURL, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        let reader = new FileReader();
        reader.readAsText(response)

        reader.onload = () => {
          let csvString = reader.result;
          this.csvObject = JSON.stringify(csvString).replace(/(?:\\[rn])+/g, '');
          this.csvObject = JSON.parse(JSON.parse(this.csvObject))
          this.showPreprocessed = true;
        }
      }
    )
  }

}

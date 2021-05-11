import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  k: number = 2;
  p: number = 1;

  distOptions: any[];
  dMetric: string = "manhattan";
  showMinkowski: boolean = false;
  apiClusterURL: string = 'http://localhost:5000/api/cluster-dataset'

  @Output() tabChangeEvent = new EventEmitter<number>();

  @Output() sendClustersEvent = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    this.distOptions = [
      { label: 'Manhattan Distance', value: 'manhattan' },
      { label: 'Euclidian Distance', value: 'euclidian' },
      { label: 'Minkowski Distance', value: 'minkowski' }
    ];
  }

  ngOnInit(): void {
  }

  checkMetric($event) {
    if (this.dMetric === 'minkowski') {
      this.p = 1;
      this.showMinkowski = true;
    } else if (this.dMetric === 'euclidian') {
      this.showMinkowski = false;
      this.p = 2;
    } else {
      this.showMinkowski = false;
      this.p = 1;
    }
  }

  async onClusterClick($event) {
    let postBody: any = {};

    postBody['k'] = this.k;
    postBody['p'] = this.p;

    try{
      console.log(this.apiClusterURL)
      let response:any = await this.http.post(this.apiClusterURL, postBody).toPromise()
      this.sendClustersEvent.emit(response);
      this.tabChangeEvent.emit(3);
    } catch (e){
      console.log(e.error)
    }
  }

}

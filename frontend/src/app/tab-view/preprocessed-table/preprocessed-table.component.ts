import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preprocessed-table',
  templateUrl: './preprocessed-table.component.html',
  styleUrls: ['./preprocessed-table.component.scss']
})
export class PreprocessedTableComponent implements OnInit{

  @Input() tableContent:any;

  @Output() tabChangeEvent = new EventEmitter<number>();

  cols: any[];

  constructor() { 
  }

  ngOnInit() {
    let keys = Object.keys(this.tableContent[0]) 
    let headers:any[] = [];

    for(let i=0; i<keys.length;i++) {
      let obj:any = {};
      obj['field'] = keys[i];
      obj['header'] = keys[i];
      headers.push(obj)
    }

    this.cols = headers;
  }

  onNextClick($event) {
    this.tabChangeEvent.emit(2);
  }

}

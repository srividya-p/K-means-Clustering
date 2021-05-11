import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.scss']
})
export class ClustersComponent implements OnInit {

  centers: string = '';
  clusters: any[] = [];
  badge: string = 'RANDOMLY INITIALISED CENTERS';

  constructor() { }

  @Input() clusterResult: any;

  @Output() tabChangeEvent = new EventEmitter<number>();

  ngOnInit(): void {
    let o_c = this.clusterResult.original_centers;
    for (let i = 0; i < o_c.length; i++) {
      let center_string = '\xa0[\xa0' + o_c[i].toString() + '\xa0]\xa0,';
      this.centers += center_string;
    }
    this.centers = this.centers.slice(0, -1);

    let c_r = this.clusterResult.clusters;
    let cluster_keys = Object.keys(c_r);

    for (let i = 0; i < cluster_keys.length; i++) {
      let cluster_rows = c_r[cluster_keys[i]];
      for (let j = 0; j < cluster_rows.length; j++) {
        let obj:any = {};
        obj['assigned'] = 'Cluster\xa0'+cluster_keys[i];
        obj['row'] = '[\xa0\xa0' + cluster_rows[j].toString() + '\xa0\xa0]';
        this.clusters.push(obj);
      }
    }

  }

  onVisualiseClick($event) {
    this.tabChangeEvent.emit(4);
  }

}

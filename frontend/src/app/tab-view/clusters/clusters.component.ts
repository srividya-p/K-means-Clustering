import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.scss']
})
export class ClustersComponent implements OnInit {

  constructor() { }

  @Input() clusterResult:any;

  ngOnInit(): void {
    console.log(this.clusterResult)
  }

}

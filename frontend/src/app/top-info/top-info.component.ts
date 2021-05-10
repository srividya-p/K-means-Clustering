import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-top-info',
  templateUrl: './top-info.component.html',
  styleUrls: ['./top-info.component.scss']
})
export class TopInfoComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

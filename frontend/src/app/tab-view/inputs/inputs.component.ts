import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  k: number = 2;

  distOptions: any[];
  value1: string = "manhattan";

  constructor() {
    this.distOptions = [
      { label: 'Manhattan Distance', value: 'manhattan' },
      { label: 'Euclidian Distance', value: 'euclidian' },
      { label: 'Minkowski Distance', value: 'minkowski' }
    ];
  }

  ngOnInit(): void {
  }

}

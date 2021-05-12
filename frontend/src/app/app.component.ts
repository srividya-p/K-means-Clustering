import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig, private titleService: Title) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.titleService.setTitle( 'K-means Clustering' );
  }

  showMessage($event) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: $event });
  }
}

import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss'],
  providers: [ GalleriaModule ]
})
export class GalleriaComponent {
  images = [{
    source: 'assets/images/galleria-images/k1.gif',
  }, {
    source: 'assets/images/galleria-images/k2.gif',
  }, {
    source: 'assets/images/galleria-images/k3.gif',
  },{
    source: 'assets/images/galleria-images/k4.gif',
  },{
    source: 'assets/images/galleria-images/k5.gif',
  },{
    source: 'assets/images/galleria-images/k6.gif',
  },{
    source: 'assets/images/galleria-images/k6.gif',
  },{
    source: 'assets/images/galleria-images/k7.gif',
  },{
    source: 'assets/images/galleria-images/k8.gif',
  },{
    source: 'assets/images/galleria-images/k9.gif',
  },{
    source: 'assets/images/galleria-images/k10.gif',
  },{
    source: 'assets/images/galleria-images/k11.gif',
  },{
    source: 'assets/images/galleria-images/k12.gif',
  },{
    source: 'assets/images/galleria-images/k13.gif',
  },{
    source: 'assets/images/galleria-images/k14.gif',
  },{
    source: 'assets/images/galleria-images/k15.gif',
  },];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
}

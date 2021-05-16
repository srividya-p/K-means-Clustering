import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';

import { NgApexchartsModule } from "ng-apexcharts";

import { TabViewComponent } from './tab-view/tab-view.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { GalleriaComponent } from './top-info/galleria/galleria.component';
import { UploadComponent } from './tab-view/upload/upload.component';
import { InputsComponent } from './tab-view/inputs/inputs.component';
import { PreprocessedTableComponent } from './tab-view/preprocessed-table/preprocessed-table.component';
import { ClustersComponent } from './tab-view/clusters/clusters.component';
import { ScatterChartComponent } from './tab-view/scatter-chart/scatter-chart.component';
import { NoCacheHeadersInterceptor } from './services/prevent-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent,
    TopInfoComponent,
    GalleriaComponent,
    UploadComponent,
    InputsComponent,
    PreprocessedTableComponent,
    ClustersComponent,
    ScatterChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    FieldsetModule,
    GalleriaModule,
    FileUploadModule,
    InputNumberModule,
    SelectButtonModule,
    ToastModule,
    TableModule,
    BadgeModule,
    DropdownModule,
    NgApexchartsModule
  ],
  providers: [Title, MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: NoCacheHeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

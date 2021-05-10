import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { FileUploadModule } from 'primeng/fileupload';


import { TabViewComponent } from './tab-view/tab-view.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { GalleriaComponent } from './top-info/galleria/galleria.component';
import { UploadComponent } from './tab-view/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent,
    TopInfoComponent,
    GalleriaComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    FieldsetModule,
    GalleriaModule,
    FileUploadModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

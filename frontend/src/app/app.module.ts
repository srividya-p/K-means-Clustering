import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { GalleriaModule } from 'primeng/galleria';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { TabViewComponent } from './tab-view/tab-view.component';
import { TopInfoComponent } from './top-info/top-info.component';
import { GalleriaComponent } from './top-info/galleria/galleria.component';
import { UploadComponent } from './tab-view/upload/upload.component';
import { InputsComponent } from './tab-view/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent,
    TopInfoComponent,
    GalleriaComponent,
    UploadComponent,
    InputsComponent
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
    ToastModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

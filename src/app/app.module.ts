import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalfLoadedComponent } from './half-loaded/half-loaded.component';
import { FullyLoadedComponent } from './fully-loaded/fully-loaded.component';

// chart
import { ChartsModule } from 'ng2-charts';

//services
import { MyserviceService } from './myservice.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HalfLoadedComponent,
    FullyLoadedComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

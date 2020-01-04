import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { ClassicPageComponent } from './classic-page/classic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialPageComponent,
    ClassicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

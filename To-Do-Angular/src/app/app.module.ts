import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToDoListHomeComponent } from './to-do-list-home/to-do-list-home.component';
import { ManasaComponent } from './manasa/manasa.component';
import { HarshComponent } from './harsh/harsh.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DataService} from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListHomeComponent,
    ManasaComponent,
    HarshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

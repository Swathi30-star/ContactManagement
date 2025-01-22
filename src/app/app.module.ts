// app.module.ts
import { HttpClientModule ,HttpErrorResponse} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {ContactService} from './contact.service'
@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,CommonModule,BrowserModule,HttpErrorResponse,Component,FormsModule],
  providers:[ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}

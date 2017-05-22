import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgServiceWorker, ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(sw: NgServiceWorker){

    sw.registerForPush({
      applicationServerKey: "GENERATED FROM A PUSH PACKAGE from npm - i.e. web push package"
    }).subscribe(sub => {
      console.log(sub.toJSON())
    })

    sw.push.subscribe(msg => {
      console.log("got a push", msg);
    })
  }
}

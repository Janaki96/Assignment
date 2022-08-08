import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';

import { TestsubmitorderComponent } from './testsubmitorder/testsubmitorder.component';
import { AllocationServerComponent } from './allocation-server/allocation-server.component';
import { DispachServerComponent } from './dispach-server/dispach-server.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SubmitorderComponent,
    
    TestsubmitorderComponent,
         AllocationServerComponent,
         DispachServerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

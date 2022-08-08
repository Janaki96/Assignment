import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { SubmitorderComponent } from './submitorder/submitorder.component';

const routes: Routes = [
  {path: 'orders', component: OrdersComponent},
  {path: 'submitorder', component: SubmitorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

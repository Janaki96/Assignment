import { Component, OnInit } from '@angular/core';
import {HttpClientService, Order} from '../service/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getOrders().subscribe(
      response => this.handleSuccessfulResponse(response),
    )
  }
  handleSuccessfulResponse(response: Order[]) {
    this.orders = response;
}

}

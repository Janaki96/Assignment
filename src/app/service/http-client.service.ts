import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class Order {
  constructor(
    public  orderId: string,
    public  name: string,
    public  code: string,
    public  title: string,
    public  description: string,
    public  imgUrl: string,
    public  price: string,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrders(){
      console.log('Test Call');
      return this.httpClient.get<Order[]>('http://localhost:8080/orders');
  }
}

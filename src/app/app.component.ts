import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fuelfrontend';
  

  constructor(private http: HttpClient){}
   
  getValues(){
    console.warn();
    
  }

  // onOrderCreate(order: {Id: number, FualType: String, Capacity: number}){
  //   console.log(order);
  //   this.http.post("http://localhost:8081/order", order, {responseType:'text' as 'json'})
  //    .subscribe((res)=>{
  //     console.log(res);
  //    });
  // }

  orderForm = new FormGroup({
   
    Id: new FormControl(''),
    FualType: new FormControl(''),
    Capacity: new FormControl(''),
  });
 
  preview: string = '';

  ngOnInit(): void {}


 
  
 
  save() {
    this.preview = JSON.stringify(this.orderForm.value);
  }
  submitOrderCreate(order:{Id:number,FualType:String,Capacity:number}){
 console.log(order)
 this.http.post('http://localhost:8080/order', order, {responseType:'text' as 'json'})
     .subscribe((res)=>{
  console.log(res);
 });

}
}

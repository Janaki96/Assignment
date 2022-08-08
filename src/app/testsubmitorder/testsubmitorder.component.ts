import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testsubmitorder',
  templateUrl: './testsubmitorder.component.html',
  styleUrls: ['./testsubmitorder.component.scss']
})
export class TestsubmitorderComponent implements OnInit {

  constructor() { }

  orderForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    type: new FormControl(''),
   capasity: new FormControl(''),
  });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    this.preview = JSON.stringify(this.orderForm.value);
  }

}

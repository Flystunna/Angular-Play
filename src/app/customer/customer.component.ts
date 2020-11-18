import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  users:string[];

  constructor(
    public http:HttpClient ,

    public customerService:CustomerService) {

     this.users = this.customerService.getUsers();

     console.log(this.customerService.getUsers());
    }
  ngOnInit() {
  }
}

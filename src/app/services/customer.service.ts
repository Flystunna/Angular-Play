import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  users: string[];

  constructor() 
  {
    this.users = ['dara', 'komolafe'];
  }
   getUsers(){
     return this.users;
   }
}

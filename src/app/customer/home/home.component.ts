import { Component, OnInit } from '@angular/core';
import { serviceResponse } from '../../services/model/serviceResponse';
import { AccountService } from '../../services/api/account.service';
import { userDTO } from 'src/app/services/model/userDTO';
import { LoginModel } from 'src/app/services/model/loginModel';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any = [];
  public model: LoginModel;

  constructor(
    public accountService: AccountService
  ) {  }


  Login(username: string, password: string) {
    this.accountService.apiAccountAuthPost(this.model).subscribe((data) =>{
      console.log(data);
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    })
  }
  ngOnInit() {
   // this.Login('administrator@gmail.com','Admin12345.');
   
    this.accountService.apiAccountGetAllUsersGet().subscribe((data) => {
      //console.log(JSON.stringify(data));
      this.users = data;
    }, (err) => {
      console.log(err)
    });
  }
}

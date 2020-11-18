import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serviceResponse } from '../../services/model/serviceResponse';
import { Configuration } from 'src/app/services';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../services/api/account.service';
import { userDTO } from '../../services/model/userDTO';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  currentProfile = null;
  message = '';
  constructor(public accountService: AccountService
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.accountService.apiAccountGetProfileGet()
      .subscribe(
        data => {
          this.currentProfile = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

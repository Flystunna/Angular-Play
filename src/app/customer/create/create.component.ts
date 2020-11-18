import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/api/account.service';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { serviceResponse } from '../../services/model/serviceResponse';
import { Configuration } from 'src/app/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public configuration = new Configuration();
  dataSaved = false;
  submitted = false;
  resp: serviceResponse;
  message = null;
  createForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public accountService: AccountService
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      nextOfKinName: [''],
      nextOfKinPhone: [''],
      dateOfBirth: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: [''],
    })
  }

  get f() { return this.createForm.controls; }

  submitForm() {
    this.submitted = true;
    if(this.createForm.invalid){ return; } 
    
    this.accountService.apiAccountAddUserPost(this.createForm.value).subscribe((data: serviceResponse) => 
    {
      console.log('Product created!');
      console.log(data);
      this.message = 'Record saved';
      if(data.code == '201'){
        this.dataSaved = true;
        this.router.navigateByUrl('/home')
      }else{
        this.message = data.shortDescription
      }
    }, (err) => { 
      //this.message = err;
      console.log(err)
    });
  }
}

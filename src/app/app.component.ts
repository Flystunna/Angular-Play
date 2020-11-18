import { Component } from '@angular/core';
import { AccountService } from '././services/api/account.service';
import { Router } from '@angular/router';

import { tokenDTO  } from '././services/model/tokenDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer';
  currentUser: tokenDTO;

  constructor(
      private router: Router,
      private authenticationService: AccountService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
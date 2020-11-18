import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../api/account.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(private router: Router,
        private accountService: AccountService
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.accountService.currentUserValue;
        if(currentUser){
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
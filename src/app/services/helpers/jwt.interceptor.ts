import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { observable, throwError, Observable } from 'rxjs';
import { AccountService } from '../api/api';


@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.accountService.currentUserValue;
        if(currentUser && currentUser.token){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        
        return next.handle(request);
    }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConfig } from '../config/app.config'


@Injectable()
export class AuthenticationService implements CanActivate {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let url = "http://freshers.gadgeon.com/login"
        let data = {
            "email": username,
            "password": password
        }
        let userlogin;
        return this.http.post(url, data, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            observe: 'response'
        });
    }
    loginf: boolean = localStorage.getItem('userLogin') == "true" ? true : false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginf;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('userLogin');
    }
}
import { Component, OnInit, Inject, Injectable, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators }from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {  AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import {AngularFireModule} from 'angularFire2';
import {MatSnackBar} from '@angular/material';

@Injectable()
@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    hide = true;
    loading = false;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    returnUrl: string;
    @ViewChild('emailid')
    emailid: any;
     @ViewChild('passwordfield')
    passwordfield: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private afAuth: AngularFireAuth,
        private snackBar: MatSnackBar,
        private authenticationService: AuthenticationService) {
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
    }
    loginFlag = false
    /**
   * Method to prepare and send back the email error message
   */
  getEmailErrorMessage() {
    if(this.email.hasError('required')){
      return 'Please enter a valid email address';
    }
    if(this.email.hasError('email'))
    {
      return 'Please enter a valid email address';
    }
    if(this.email.hasError('pattern')){
      return 'Please enter a valid email address';
    }
    return '';

  }
  /**
   * Method to prepare and send back to password error message
   */
  getPasswordErrorMessage() {
    return 'Password must have at least eight character.';
  }
    ngOnInit() {
        // reset login status
        if (localStorage.getItem('userLogin') == 'true') {
            this.router.navigateByUrl('/candidate-details')
        }
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    Register() {
        this.router.navigateByUrl('/user-profile')
    }
    validate() {
        if (this.model.name == undefined || this.model.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    authProvider;
    IsInvalidUser =false;
    message;
    
    login() {
       // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(success =>{
            //this.router.naviga
       //});
       if(this.email.value == "" || this.password.value == ""||this.password.invalid||this.email.invalid){
            this.snackBar.open('Please enter valid username & password','',{duration:1000});
            if(this.email.value == ""||this.email.invalid){
                this.emailid.nativeElement.focus();
              } else {
                this.passwordfield.nativeElement.focus();
              }
            return false;
        }
        if (this.email.value == "hr@gadgeon.com" && this.password.value == "Hr@Gad#2018") {
            localStorage.setItem("adminLoginGad", "true");
            localStorage.setItem('userLogin', 'true');
            localStorage.setItem('username', this.model.username);
            this.loginFlag = true;
            this.loading = true;
            this.router.initialNavigation();
            this.router.navigateByUrl('/candidate-details')
            location.reload();
        }
        else {
            this.authenticationService.login(this.email.value, this.password.value).subscribe(
                data => {
                    console.log(data["body"])
                    if (data["body"]['succuss'] == true) {
                        console.log("Success")
                        localStorage.setItem('userLogin', 'true');
                        localStorage.setItem('username', this.email.value);
                        this.loading = true;
                        localStorage.setItem("gadLoginTocken", data["body"]["token"])
                        this.loginFlag = true;
                        this.router.initialNavigation();
                        this.router.navigateByUrl('/candidate-details')
                    }
                },
                error => {
                    this.IsInvalidUser = true;
                    this.snackBar.open('Invalid username or password','',{duration:2000});
                });
        }
    }
}

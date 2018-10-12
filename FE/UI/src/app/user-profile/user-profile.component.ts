import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../services/api.services'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  model: any = {};
  constructor(private apicall: ApiServices, private router: Router,) { }

  ngOnInit() {
    console.log(this.model);
  }
  isRegSuccess = false;
  message = "";
  Register() {
    this.apicall.submitCandidateRecord(this.model).subscribe(
      resp => {
        this.isRegSuccess = resp["body"]["succuss"];
        this.message = resp["body"]["msg"];
        this.isRegSuccess = true;
        console.log(this.isRegSuccess, this.message)
      },
      err => {
        let errorMessage = this.getErrorMessage(JSON.parse(err["error"])["errorCode"])
        this.message = errorMessage;
        console.log(JSON.parse(err["error"])["errorCode"])
        //this.message = this.message = err["error"]["errorCode"];
        console.log("Server Error");
      });
  }
  getErrorMessage(errorCode) {
    this.Login();
    let msg = "Invalid Operation"
    switch (errorCode) {
      case "ER001":
        msg = "Server Error...Please contact admin"
        break;
      case "ER002":
        msg = "Server Error...Please contact admin"
        break;
      case "ER003":
        msg = "Candidate already exist..!!"
        break;

    }
    return msg;
  }
  Login(){
    localStorage.setItem('userLogin',"false");
    location.reload();
    this.router.navigateByUrl('/login')
  }
}

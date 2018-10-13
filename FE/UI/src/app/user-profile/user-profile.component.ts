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
  validate(){
    if(this.model.email==undefined){
      this.message = "Enter your Email";
      return false;
    }
    else if(this.model.password==undefined){
      this.message ="Enter your Password";
      return false;
    }
    else if(this.model.name==undefined){
      this.message ="Enter your Name";
      return false;
    }
    else if(this.model.college==undefined){
      this.message ="Enter your College Name";
      return false;
    }
    else if(this.model.yop==undefined){
      this.message ="Enter User year of passing";
      return false;
    }
    else if(this.model.degreePercentage==undefined){
      this.message ="Enter your BTech %";
      return false;
    }
    else if(this.model.plusTwoPercentage==undefined){
      this.message ="Enter your 12th %";
      return false;
    }
    else if(this.model.sslcPercentage==undefined){
      this.message ="Enter your 10th %";
      return false;
    }
    else if(this.model.mobile==undefined){
      console.log("Enter User mobile number");
      return false;
    }
    else if(this.model.batch==undefined){
      this.message ="Enter your batch";
      return false;
    }
    else{
      return true;
    }
  }
  Register() {
    if(this.validate()){
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
    this.router.navigateByUrl('/login')
  }
}

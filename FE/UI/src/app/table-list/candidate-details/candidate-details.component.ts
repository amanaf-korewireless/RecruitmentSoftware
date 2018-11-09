import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../table-list.component';
import { ApiServices } from '../../services/api.services'

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CandidateDetailsComponent>,private apicall: ApiServices,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    technicalRound1Result = this.data.technicalRound1Result;
     technicalRound2Result = this.data.technicalRound2Result;
     writingTestResult = this.data.writingTestResult;
     hrRound2Result = this.data.hrRound2Result;
     successMessage="";
     errorMessage="";
  ngOnInit() {
    console.log(this.data.name);
     

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateStatus(){
    this.apicall.updateStatus({
      "email":this.data.email,
      "writingTestResult": this.writingTestResult,
      "aptitudeTestResult":this.writingTestResult,
      "technicalRound1Result":this.technicalRound1Result,
      "technicalRound2Result":this.technicalRound2Result,
      "hrRound2Result" : this.hrRound2Result,
    }).subscribe(data=>{
      console.log(data);
      if(data.status == 200){
        this.successMessage = "status updated successfully";
        this.errorMessage = "";

      }else{
        this.successMessage = "";
        this.errorMessage = "status updation failed";
        
      }
      //this.dialogRef.close();
    })
  }

}

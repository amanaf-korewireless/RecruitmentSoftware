import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServices } from '../../services/api.services'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-candidate-element',
  templateUrl: './candidate-element.component.html',
  styleUrls: ['./candidate-element.component.css']
})
export class CandidateElementComponent implements OnInit, OnChanges {

  constructor(private apicall: ApiServices) {
    //this.initmap();
  }
  prodBarPercent: number;
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  writingTestResult;
  registrationDate;
  technicalRound1Result;
  technicalRound2Result;
  hrRound2Result;
  updateStatus(){
    this.apicall.updateStatus({
      "email":this.candElement.email,
      "writingTestResult": this.writingTestResult,
      "aptitudeTestResult":this.writingTestResult,
      "technicalRound1Result":this.technicalRound1Result,
      "technicalRound2Result":this.technicalRound2Result,
      "hrRound2Result" : this.hrRound2Result
    }).subscribe(data=>{
      console.log(data)
    })
  }
  @Input() globalopenflag;
  @Input() candElement: {
    name: string,
    college: string,
    yop: number,
    sslcPercentage: string, 
    plusTwoPercentage: string,
    degreePercentage:string,
    mobile:string,
    email:string,
    password:string
  }
}

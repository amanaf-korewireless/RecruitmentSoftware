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

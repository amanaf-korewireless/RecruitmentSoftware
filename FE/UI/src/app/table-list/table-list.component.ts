import { Component, OnInit, Renderer2, Output,OnChanges, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommonModule } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiServices } from '../services/api.services'
import { Router } from '@angular/router';
declare const $: any;
import { getParentRenderElement } from '@angular/core/src/view/util';
import { CandidateDetailsComponent } from  './candidate-details/candidate-details.component';
export interface StudentData {
  name: string;
  college: string;
  email: string;
  batch: string;
  mobile: string;
  passout: string;
  technicalRound1Result: string;
  technicalRound2Result: string;
  writingTestResult: string;
  hrRound2Result: string;
}
export interface DialogData {
  name: string;
  college: string;
  email: string;
  batch: string;
  mobile: string;
  passout: string;
  technicalRound1Result: string;
  technicalRound2Result: string;
  writingTestResult: string;
  hrRound2Result: string;

}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['name','college','email','mobile','batch'];
  dataSource: MatTableDataSource<StudentData>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private renderer: Renderer2, private apicall: ApiServices, private router: Router,public dialog: MatDialog) {
    if (localStorage.getItem('userLogin') == 'true') {
    }
    else {
      this.router.navigateByUrl('/login')
    }
   
  }
  ngOnInit() {
    this.initdata();

  }
  
  ngOnChanges(){
    this.initdata();
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  userName;
  candidateList = []
  candidateDetail={};
  initdata() {
    //console.log(localStorage.getItem("adminLoginGad"))
    if(localStorage.getItem("adminLoginGad")=="true"){
      this.IsadminLogin =true;
    }
    else{
      this.IsadminLogin =false;
    }
    this.apicall.getCandidateDetail().subscribe(data=>{
      console.log((data["data"]))
      this.candidateDetail = data["data"];
    })
    this.candidateList = []
    this.apicall.getCandidateList().subscribe(data =>{
      this.candidateList = data["data"];
      let list = [];

      this.candidateList.forEach(element => {
          list.push({ "name": element.name, "college":element.college, 
                      "mobile":element.mobile, "passout":element.yop,
                      "batch":element.batch,"email":element.email,
                      "technicalRound1Result":element.technicalRound1Result,"technicalRound2Result":element.technicalRound2Result,
                      "writingTestResult":element.writingTestResult,"hrRound2Result":element.hrRound2Result
                    });
      });
    // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    

  }
  IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true:false;
  getColorT1(){
    if(this.candidateDetail["technicalRound1Result"] == 'Pass'){
      return "green";
    }
    if(this.candidateDetail["technicalRound1Result"] == 'Pending'){
      return "orange";
    }
    if(this.candidateDetail["technicalRound1Result"] == 'Fail'){
      return "red";
    }
    else{
      return 'blue'
    }
  }
  getColorT2(){
    if(this.candidateDetail["technicalRound2Result"] == 'Pass'){
      return "green";
    }
    if(this.candidateDetail["technicalRound2Result"] == 'Pending'){
      return "orange";
    }
    if(this.candidateDetail["technicalRound2Result"] == 'Fail'){
      return "red";
    }
    else{
      return 'blue'
    }
  }
  getColorW(){
    if(this.candidateDetail["writingTestResult"] == 'Pass'){
      return "green";
    }
    if(this.candidateDetail["writingTestResult"] == 'Pending'){
      return "orange";
    }
    if(this.candidateDetail["writingTestResult"] == 'Fail'){
      return "red";
    }
    else{
      return 'blue'
    }
  }
  getColorH(){
    if(this.candidateDetail["hrRound2Result"] == 'Pass'){
      return "green";
    }
    if(this.candidateDetail["hrRound2Result"] == 'Pending'){
      return "orange";
    }
    if(this.candidateDetail["hrRound2Result"] == 'Fail'){
      return "red";
    }
    else{
      return 'blue'
    }
  }
  expand = 'expand_more'
  rotate(){
    if(this.expand == 'expand_less'){
      this.expand = 'expand_more'
    }
    else{
      this.expand = 'expand_less'
    }
  }
  openDialog(row): void {
    const dialogRef = this.dialog.open(CandidateDetailsComponent, {
      width: '550px',
      data: { name: row.name, college: row.college, email: row.email,
              batch: row.batch, mobile: row.mobile,passout: row.passout,
              writingTestResult: row.writingTestResult, technicalRound1Result: row.technicalRound1Result,
              technicalRound2Result: row.technicalRound2Result,hrRound2Result: row.hrRound2Result            
            }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.initdata();
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details/candidate-details.component.html',
  styleUrls: ['./candidate-details/candidate-details.component.css']
})
export class CandidateDetailComponent {

  constructor(
    public dialogRef: MatDialogRef<CandidateDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  

}
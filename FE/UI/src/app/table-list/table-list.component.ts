import { Component, OnInit, Renderer2, Output,OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiServices } from '../services/api.services'
import { Router } from '@angular/router'
declare const $: any;
import { GlobalService } from '../services/index';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [GlobalService]
})
export class TableListComponent implements OnInit {

  constructor(private renderer: Renderer2, private apicall: ApiServices, private router: Router, public global: GlobalService) {
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
      console.log((data["data"])["name"])
      this.candidateDetail = data["data"];
    })
    this.candidateList = []
    this.apicall.getCandidateList().subscribe(data =>{
      this.candidateList = data["data"];
    })

  }
  IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true:false;

}

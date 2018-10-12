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

  candidateList = [1, 2, 3]
  initdata() {
    console.log(localStorage.getItem("adminLoginGad"))
    if(localStorage.getItem("adminLoginGad")=="true"){
      this.IsadminLogin =true;
    }
    else{
      this.IsadminLogin =false;
    }
  }
  IsadminLogin = localStorage.getItem("adminLoginGad") == "true" ? true:false;

}

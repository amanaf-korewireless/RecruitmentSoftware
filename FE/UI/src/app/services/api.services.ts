import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { AppConfig } from '../config/app.config'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, Headers } from '@angular/http';
@Injectable()
export class ApiServices {
  constructor(private http: HttpClient) { }
  private serviceUrl = AppConfig.endpoints["atollEndpoint"];
  private serverIp = AppConfig.endpoints["serverIp"];
  getCandidateList() {
    return this.http.get(this.serverIp+"/adminprovider");
  }
  getCandidateDetail() {
    let url = this.serverIp+'/result/'+localStorage.getItem("username")+'/'+localStorage.getItem("gadLoginTocken")
    return this.http.get(url);
  }
  submitCandidateRecord(userData:
    {
      name: string,
      college: string,
      yop: number,
      sslcPercentage: string, 
      plusTwoPercentage: string,
      degreePercentage:string,
      mobile:string,
      email:string,
      password:string
      batch:string
    }) 
    {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serverIp, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
    });
  }
}
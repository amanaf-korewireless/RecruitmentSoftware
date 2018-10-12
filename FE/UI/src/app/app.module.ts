import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { CandidateElementComponent } from './table-list/candidate-element/candidate-element.component'
import { GoogleAPIService } from './services/google-map.services'
import { ApiServices } from './services/api.services'
import { FilterUtils } from './lib/FilterUtils'
import { ChartModule } from 'angular-highcharts';
import { LoginComponent } from './login/login.component'
import { AuthenticationService, AlertService } from './services/index'
import { DatePipe } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircularProgressComponent } from './circular-progress/circular-progress.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    LoginComponent,
    CircularProgressComponent,
    CandidateElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    JsonpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [GoogleAPIService, ApiServices, FilterUtils, { provide: LocationStrategy, useClass: HashLocationStrategy }, AuthenticationService, AlertService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

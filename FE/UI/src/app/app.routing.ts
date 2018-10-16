import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'candidate-details',     component: TableListComponent },
    { path: 'login',        component: LoginComponent },
    { path: '**',               redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

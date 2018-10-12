import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  imageWhite: string;
  imageDull: string;
  iconFlag : boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/candidate-details', title: 'Home', icon: 'home', class: '', imageWhite: '', imageDull: '',iconFlag : true },
  { path: '/user-profile', title: 'Register', icon: 'playlist_add', class: '', imageWhite: '', imageDull: '',iconFlag : localStorage.getItem("adminLoginGad") == "true"?true:false }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}

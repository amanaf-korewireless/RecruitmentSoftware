import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { ApiServices } from '../services/api.services'
import { EventEmitter } from 'events';

@Injectable()
export class GlobalService {
  constructor(private apicall: ApiServices) {
    this.init();
  }
  activeTab = 'production';
  interval;
  dropdownChanged = new EventEmitter();
  public dropdownPeriods = ['Last 24 Hours', 'Last Week', 'Last Month', 'Last Year']
  public selectedPeriod = this.dropdownPeriods[0];
  selectSortPeridDropdown(period: string) {
    this.selectedPeriod = period;
  }
  totalCount = 0;
  totalproduction = 0;
  totalStorage = 0;
  totalRepair = 0;
  totalMissing = 0;
  totalunassigned = 0;
  prodPercent;
  storePercent;
  repPercent;
  missingPercent;
  unUsPercent;
  init() {
  }
}
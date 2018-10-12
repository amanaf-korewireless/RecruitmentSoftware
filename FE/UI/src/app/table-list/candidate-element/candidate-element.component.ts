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
  @Input() candElement: { sno: string, gateway_datetime: string, server_datetime: string, normal_timeout: string, press_timeout: string, gatewayid: string, nodeid: string, nwid: string, nodetype: string, node_reg_flag: string, switch_status: string, die_removal_flag: string, suppliername: string, assypartnumber: string, partnumber: string, toolid: string, parttype: string, remarks: string, count: string, max_die_life: string, die_life: string, batterystatus: string, latitude: string, longitude: string, zone: string, arming_state: string, die_state: string, mtbf: string, quality: string, failure_downtime: string, reserved: string, endflag: string }
}

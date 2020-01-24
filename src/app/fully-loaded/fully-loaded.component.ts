import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { MyserviceService } from "../myservice.service";
//interface
import { Iarray } from "../interface";
import * as _ from "lodash";

@Component({
  selector: 'app-fully-loaded',
  templateUrl: './fully-loaded.component.html',
  styleUrls: ['./fully-loaded.component.css']
})
export class FullyLoadedComponent implements OnInit {
  addNewData: boolean = true;
  data: Iarray[] = [];
  depart: any = [];
  temp: any;
  //edit
  addData:any = { ID: undefined, Name: "", gender: undefined, department: undefined, del: false };

  constructor(private myservice: MyserviceService, private appHomeservice: AppComponent) { }


  ngOnInit() {
    this.depart = this.appHomeservice.Department;
    this.data = this.myservice.tableArray;
    // this.appHomeservice.chartCallOne();
  }

  save(x:number) {
    if (this.valid() || _.findIndex(this.myservice.tableArray, function (o) { return o.ID === x }) !== -1) {
      alert("Please check the ID you have entered");
      return;
    } else {
      this.myservice.update(this.addData);
      this.clear();
      this.appHomeservice.chartCallOne();
    }
  }

  del(x) {
    if ((x.ID === undefined || null) || (x.Name === "" || undefined) || (x.gender === "" || undefined) || (x.department === "" || undefined)) {
      return;
    } else {
      this.myservice.del(x);
    }
  }
  //Validate
  valid() {
    if ((this.addData.ID === undefined || null) || (this.addData.Name === "" || undefined) || (this.addData.gender === "" || undefined) || (this.addData.department === "" || undefined)) {
      alert("enter every Details");
      return "true";
    } else { return false }
  }

  //clear
  clear() {
    this.addData = { ID: undefined, Name: "", gender: undefined, department: undefined, del: false };
  }

  //enable
  enableNewRecord() {
    if (!this.addNewData) {
      this.clear();
    }
    this.addNewData = !this.addNewData;
  }
}

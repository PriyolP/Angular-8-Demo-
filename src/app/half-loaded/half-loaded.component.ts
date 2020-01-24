import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { MyserviceService } from "../myservice.service";

//interface
import { Iarray } from "../interface";
import * as _ from "lodash";
import { debug } from 'util';

@Component({
  selector: 'app-half-loaded',
  templateUrl: './half-loaded.component.html',
  styleUrls: ['./half-loaded.component.css']
})
export class HalfLoadedComponent implements OnInit {
  title = "Angular Half-Loaded";
  addNewData: boolean = true;
  data: Iarray[] = [];
  DataDope: any = [];
  depart: any = [];
  //edit
  addData = { ID: undefined, Name: "", gender: undefined, department: undefined, del: false };

  constructor(private myservice: MyserviceService, private appHomeservice: AppComponent) { }


  ngOnInit() {
    this.depart = this.appHomeservice.Department;
    this.DataDope = _.cloneDeep(this.myservice.tableArray);
    this.data = _.remove(this.DataDope, function (x) {
      return (x.del !== true);
    });

    // console.log(this.DataDope);
    // console.log(this.data);
    // this.appHomeservice.chartCallOne();
  }

  save(x:number) {
    console.log(_.findIndex(this.myservice.tableArray, function (o) { return o.ID === x }));
    // return;
    if (this.valid() || _.findIndex(this.myservice.tableArray, function (o) { return o.ID === x }) !== -1) {
      alert("Please check the Details you have entered or please check ID you have entered");
      return;
    } else {
      this.myservice.update(this.addData);
      this.clear();
      this.appHomeservice.chartCallOne();
      this.enableNewRecord()
    }
  }

  del(x) {
    if ((x.ID === undefined || null) || (x.Name === "" || undefined) || (x.gender === "" || undefined) || (x.department === "" || undefined)) {
      return;
    } else {
      this.myservice.del(x);
      this.ngOnInit();
    }
  }
  //Validate
  valid() {
    console.log(this.addData.gender === ("" || undefined));
    console.log(this.addData.gender);
    console.log(this.addData.department);
    console.log(this.addData.department === ("" || undefined));
    if ((this.addData.ID === undefined || null) || (this.addData.Name === "" || undefined) || (this.addData.gender === ("" || undefined)) || (this.addData.department === ("" || undefined))) {
      return true;
    } else { return false }
  }

  //clear
  clear() {
    this.addData = { ID: undefined, Name: "", gender: undefined, department: undefined, del: false };
    this.ngOnInit();
  }

  //enable
  enableNewRecord() {
    if (!this.addNewData) {
      this.clear();
    }
    this.addNewData = !this.addNewData;
  }
}

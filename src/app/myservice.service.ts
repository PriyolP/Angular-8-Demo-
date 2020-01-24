import { Injectable } from '@angular/core';
import { Iarray } from "./interface";
import * as _ from "lodash";
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  tableArray: Iarray[] = [
    {ID: 324, Name: "rew", gender: "Male", department: "senior.angular developer", del: false},
    {ID: 5, Name: "fsd", gender: "Female", department: "jr.node developer", del: false},
    {ID: 4, Name: "das", gender: "Female", department: "senior.angular developer", del: false}
  ];
  constructor() { }

  update(item: any) {
    this.tableArray.push(item);
  }

  edit(item: any, x: any) {
    this.tableArray[x] = item;
  }

  del(item: any) {
    let d = _.findIndex(this.tableArray, function (o) { return o.ID == item.ID });
    this.tableArray[d].del = true;
  }
}

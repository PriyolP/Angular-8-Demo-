import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
// import { MultiDataSet, Label } from 'ng2-charts';
import { MyserviceService } from "./myservice.service";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  tableArray: any = [];
  // departmentData:any =[];
  Department: any = _.uniqBy([
    { dept: "jr.angular developer" },
    { dept: "senior.angular developer" },
    { dept: "jr.node developer" },
    { dept: "senior.angular developer" },
    { dept: "maintanence" },
    { dept: "repair" }
  ], 'dept');
  gender: any = [
    { gender: "Male" },
    { gender: "Female" },
  ]

  ////////---------------------------------
  libel: any = _.uniqBy(this.myservice.tableArray, 'gender');
  public doughnutChartLabels: any[] = ['Male', 'Female'];
  public doughnutChartData: any = [
    _.filter(this.myservice.tableArray, { 'gender': 'Male' }).length, _.filter(this.myservice.tableArray, { 'gender': 'Female' }).length
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  //////// second Pie Chart
  public doughnutChartLabels2: any[] = this.Department.map((item: { dept: any; }) => { return item.dept });

  public doughnutChartData2: any = [
    this.doughnutChartLabels2.map(item => { return _.filter(this.myservice.tableArray, { 'department': item }).length })
  ];
  // public doughnutChartType2: ChartType = 'doughnut';

  //-----------------------------------------

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    // console.log(window.location.href);
    // console.log(window.location.pathname);
    // console.log(window.location.origin);
    // console.log(window.location.host);
    if (window.location.pathname === "/") {
      window.top.location.href = "/half";
    }

  }

  chartCallOne() {
    this.doughnutChartData = [
      _.filter(this.myservice.tableArray, { 'gender': 'Male' }).length, _.filter(this.myservice.tableArray, { 'gender': 'Female' }).length
    ];
    this.doughnutChartLabels2 = this.Department.map((item: { dept: any; }) => { return item.dept });
    this.doughnutChartData2 = this.doughnutChartLabels2.map(item => { return _.filter(this.myservice.tableArray, { 'department': item }).length });
  }

}

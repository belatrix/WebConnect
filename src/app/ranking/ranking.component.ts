import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { EmployeeService } from "../core/employee.service";

@Component({
  templateUrl: 'ranking.component.html',
  styleUrls: ['ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankingList;
  subscriptionRoute: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const tag = "last_month_score";
    this.getContent(tag)
  }

  public changeTab(e) {
    const _path = "/home/ranking/";
    let tag;
    switch (e.index) {
      case 0:
        tag = 'last_month_score';
        break;
      case 1:
        tag = 'current_month_score';
        break;
      case 2:
        tag = 'total_score';
        break;
      default:
        // TODO, navigate to 404 page
        break;
    }
    this.getContent(tag);
  }

  getContent(tag) {
    const qty = 5;
    let topEmployeeListP = this.employeeService.getTopEmployeeList(tag, qty);
    Promise.all([topEmployeeListP])
      .then(values => {
        console.log(values);
        this.rankingList = values[0];
      })
      .catch(error => console.log("error"));
  }

}

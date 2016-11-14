import { Component, OnInit } from '@angular/core';

import { AppPage } from "../core/appPage";

@Component({
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent extends AppPage implements OnInit {
  
  constructor() {
    super('Give a recommendation');
   }

  ngOnInit() {
  }

}

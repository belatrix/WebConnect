import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  title: string = 'Give a recommendation';
  constructor() { }

  ngOnInit() {
  }

}

import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-detail',
  templateUrl: './ranking-detail.component.html',
  styles: []
})
export class RankingDetailComponent implements OnInit {
  @Input() ranking;
  constructor() { }

  ngOnInit() {
  }

}

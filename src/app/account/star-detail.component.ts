import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styleUrls: ['star-detail.component.css']
})
export class StarDetailComponent implements OnInit {

  @Input() stars;

  constructor() { }

  ngOnInit() {
  }

}

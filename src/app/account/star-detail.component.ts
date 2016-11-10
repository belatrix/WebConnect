import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-detail',
  templateUrl: './star-detail.component.html',
  styles: []
})
export class StarDetailComponent implements OnInit {

  @Input() stars;

  constructor() { }

  ngOnInit() {
    console.log(this.stars)
  }

}

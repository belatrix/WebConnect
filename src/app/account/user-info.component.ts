import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}

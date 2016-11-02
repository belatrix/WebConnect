import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'Contacts';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import userData from '../../data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  data=userData;

  constructor() { }

  ngOnInit() {
  }

}

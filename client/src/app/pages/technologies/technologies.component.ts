import { Component, OnInit } from '@angular/core';
import { technologies } from '../../../appData.json';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.less']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  technologiesData = technologies;

  ngOnInit() {
  }

}

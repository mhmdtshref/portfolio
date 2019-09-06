import { Component, OnInit } from '@angular/core';
import { socials } from '../../../appData.json';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.less']
})
export class SocialsComponent implements OnInit {

  constructor() { }

  socialsData = socials;

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../pages/requests.service';

@Component({
  selector: 'app-socials-section',
  templateUrl: './socials-section.component.html',
  styleUrls: ['./socials-section.component.less']
})
export class SocialsSectionComponent implements OnInit {

  constructor(private requestsService: RequestsService) { }

  socialsList = [];


  ngOnInit() {
    this.requestsService.getSocials().then((socials: any) => {
      this.socialsList = socials;
    }).catch((err) => {
      alert(`Error: ${err.message}`);
    });
  }

}

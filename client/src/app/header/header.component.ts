import { Component, OnInit } from '@angular/core';
import userData from '../../data.json';
import {HttpClient} from '@angular/common/http';
import {RequestsService} from "../pages/requests.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  data = userData;
  socialsList = [];

  constructor(private requestsService: RequestsService) { }



  ngOnInit() {
    this.requestsService.getSocials().then((socialsData: any) => {
      this.socialsList = socialsData;
    }).catch((err) => {
      alert(`Error: ${err.message}`);
    });
  }

}

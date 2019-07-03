import { Component, OnInit } from '@angular/core';
import userData from '../../data.json';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  data = userData;
  socialsList = [];

  constructor(private http: HttpClient) { }

  getSocials = () => {
    this.http.get('/api/social').subscribe((res: any) => {
      console.log("RESSS", res);
      if (res.success) {
        this.socialsList = res.data;
      } else {
        alert(`Response Error: ${res.error}`);
      }
    });
  }

  ngOnInit() {
    this.getSocials();
  }

}

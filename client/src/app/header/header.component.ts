import { Component, OnInit } from '@angular/core';
import userData from '../../data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  data = userData;

  socialsList = () => {
    return [{
      imageUrl: 'https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png',
      socialLink: 'https://www.facebook.com/mhmdtshref',
    },
      {
        imageUrl: 'http://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png',
        socialLink: 'http://twitter.com/mhmdtshref',
      }];
  }

  constructor() { }

  ngOnInit() {
  }

}

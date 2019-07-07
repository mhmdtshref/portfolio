import { Component, OnInit } from '@angular/core';
import userData from '../../data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

    address = userData.address;
    phone = userData.phone;
    email = userData.email;
    inspiration = userData.inspiration;

  constructor() {  }

  ngOnInit() {
  }

}

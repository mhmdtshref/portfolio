import {Component, Input, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private cookiesServices: CookieService, private router: Router) { }


  @Input() unAuth: any;

  logoutClickHandler = (event) => {
      event.preventDefault();
      this.cookiesServices.delete('token');
      this.unAuth();
  }

  ngOnInit() {
  }

}

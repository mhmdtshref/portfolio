import {Component, OnInit} from '@angular/core';
import {AuthService} from './usable/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'admin';

  auth: boolean;

  constructor(private authServices: AuthService, private router: Router){ }

  removeAuth = () => {
      this.auth = false;
  }

  setAuth = () => {
      this.auth = true;
  }

  ngOnInit() {
      this.authServices.checkAuth()
          .then(() => {
              this.auth = true;
          }).catch((error) => {
          this.auth = false;
      });
  }
}

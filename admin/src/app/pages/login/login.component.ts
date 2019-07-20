import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../usable/auth.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authServices: AuthService, private router: Router) { }

  @Input() setAuth: any;

  username = '';
  password = '';

  loginClickHandler = (event) => {
      event.preventDefault();
      this.authServices.login(this.username, this.password)
          .then(() => {
              this.setAuth();
          })
          .catch(() => {
              alert('Username and Password are not matched!');
          });
  }

  ngOnInit() {
  }

}

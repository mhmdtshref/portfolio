import { Injectable } from '@angular/core';
import {RequestsService} from './requests.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private requestsServices: RequestsService, private cookieService: CookieService, private router: Router) { }

  login = (username, password) => new Promise((resolve, reject) => {
      this.requestsServices.loginRequest(username, password).then(({ token }) => {
          this.cookieService.set('token', token);
          resolve();
      }).catch((error) => {
          reject(new Error(`Error: ${error.message}`));
      });
  })

    checkAuth = () => new Promise((resolve, reject) => {
      if (this.cookieService.check('token')) {
          this.requestsServices.checkAuth().then(() => {
              resolve();
          }).catch((error) => {
              reject(error);
          });
      } else {
          reject(new Error('No Cookies found!'));
      }
    })

}

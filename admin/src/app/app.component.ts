import {Component, OnInit} from '@angular/core';
import {AuthService} from "./usable/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'admin';

  constructor(private authServices: AuthService, private router: Router){ }

  ngOnInit() {
      this.authServices.checkAuth().catch((error) => {
          this.router.navigate(['login']);
      });
  }
}

import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import userData from '../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public constructor(private titleService: Title ) {
    this.titleService.setTitle(`${userData.name} - Portfolio`);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-section-icon',
  templateUrl: './section-icon.component.html',
  styleUrls: ['./section-icon.component.less']
})
export class SectionIconComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() logoUrl: string;

  constructor(private router: Router) { }

  RouteOnClick = () => {
    this.router.navigate([this.title.toLowerCase()]);
  }


  ngOnInit() {
  }

}

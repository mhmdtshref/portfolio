import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

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

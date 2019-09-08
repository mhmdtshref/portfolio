import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.less']
})
export class TechnologyCardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() name: string;
  @Input() link: string;

  constructor() { }

  navigateToLink = () => {
    window.location.href = this.link;
  }

  ngOnInit() {
  }

}

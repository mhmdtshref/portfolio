import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.less']
})
export class LanguageCardComponent implements OnInit {

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

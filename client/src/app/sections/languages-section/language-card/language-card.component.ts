import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.less']
})
export class LanguageCardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.less']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  @Input() title;
  @Input() brief;
  @Input() features;

  ngOnInit() {
  }

}

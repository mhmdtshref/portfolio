import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.less']
})
export class SocialComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() socialLink: string;

  constructor() { }

  ngOnInit() {
  }

}

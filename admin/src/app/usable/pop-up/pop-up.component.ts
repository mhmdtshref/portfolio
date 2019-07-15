import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() message: string;
  @Input() redButton: string;
  @Input() greenButton: string;
  @Input() action: any;

  onRedClicked = () => {
      this.action(1);
  }

  onGreenClicked = () => {
      this.action(0);
  }

  ngOnInit() {
  }

}

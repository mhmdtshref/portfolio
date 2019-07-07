import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.less']
})
export class ServiceCardComponent implements OnInit {

    @Input() imageUrl: string;
    @Input() name: string;
    @Input() brief: string;

  constructor() { }

  ngOnInit() {
  }

}

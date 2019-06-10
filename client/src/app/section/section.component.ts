import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  constructor() { }

  @Input() title: string;

  getCards = () => {
    return [{
      type: 2,
      details: { iconUrl: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png', title: 'Web Development', description: 'Create web applications using trending web technologies or packages.' }
    },
      {
        type: 2,
        details: { iconUrl: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png', title: 'Web Development', description: 'Create web applications using trending web technologies or packages.' }
      },
      {
        type: 2,
        details: { iconUrl: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png', title: 'Web Development', description: 'Create web applications using trending web technologies or packages.' }
      }];
  };

  ngOnInit() {
  }

}

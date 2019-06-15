import {Component, Input, OnInit} from '@angular/core';
import request from 'axios';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  @Input() title: string;
  cards = [];

  constructor() {
  }

  getCards = () => {
    console.log('TITLE: ', this.title);
    request.get(`/api/section/${this.title}`)
      .then(({data: response}) => {
        if (response.success) {
          this.cards = this.generateSectionCards(response.data.section, response.data.cards);
          console.log('TITLE: ', this.title, 'CARDS:: ', this.cards);
        } else {
          alert(`Response error: ${response.error}`);
        }
      })
      .catch((error) => {
        alert(`Request Error: ${error.message}`);
    });

  }

  generateSectionCards = ({ size, name }, cards) => {
    if (cards.length > size) {
      return (cards.slice(0, size - 1)).concat([ { type: 5, details: { link: `/${name}` } } ]);
    } else {
      return cards;
    }
  }

  ngOnInit() {
    this.getCards();
  }

}

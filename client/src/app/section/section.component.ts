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
    console.log("TITLE: ", this.title);
    request.get(`/api/section/${this.title}`)
      .then(({data: response}) => {
        if(response.success){
          this.cards = response.data.cards;
          console.log("TITLE: ", this.title,"CARDS:: ", this.cards)
        } else {
          alert(`Response error: ${response.error}`);
        }
      })
      .catch((error) => {
        alert(`Request Error: ${error.message}`);
    });

  };

  ngOnInit() {
    this.getCards();
  }

}

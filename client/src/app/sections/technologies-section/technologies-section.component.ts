import { Component, OnInit } from '@angular/core';
import {SectionsService} from '../sections.service';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.less']
})
export class TechnologiesSectionComponent implements OnInit {

  constructor(private sectionService: SectionsService) { }

    cards = [];

    getCards = () => {
        this.sectionService.Request('technology')
            .then((technologies: any) => {
                this.cards = technologies;
            })
            .catch((error: string) => {
                alert(`Technologies section request error: ${error}`);
            });
    }

  ngOnInit() {
        this.getCards();
  }

}

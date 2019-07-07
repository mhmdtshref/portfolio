import { Component, OnInit } from '@angular/core';
import {SectionsService} from '../sections.service';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.less']
})
export class ServicesSectionComponent implements OnInit {

    cards = [];

  constructor(private sectionService: SectionsService) { }


    getCards = () => {
        this.sectionService.Request('service')
            .then((services: any) => {
                this.cards = services;
            })
            .catch((error: string) => {
                alert(`Services section request error: ${error}`);
            });
    }

  ngOnInit() {
      this.getCards();
  }

}

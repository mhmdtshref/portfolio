import { Component, OnInit } from '@angular/core';
import {SectionsService} from "../sections.service";

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.less']
})
export class LanguagesSectionComponent implements OnInit {

    constructor(private sectionService: SectionsService) { }

    cards = [];

    getCards = () => {
        this.sectionService.Request('language')
            .then((languages: any) => {
                this.cards = languages;
            })
            .catch((error: string) => {
                alert(`Languages section request error: ${error}`);
            });
    }

  ngOnInit() {
     this.getCards();
  }

}

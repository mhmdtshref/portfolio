import { Component, OnInit } from '@angular/core';
import {SectionsService} from '../sections.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.less']
})
export class ProjectsSectionComponent implements OnInit {

  constructor(private sectionService: SectionsService) { }

  cards = [];

  getCards = () => {
      this.sectionService.Request('project')
          .then((projects: any) => {
              this.cards = projects;
          })
          .catch((error: string) => {
              alert(`Projects section request error: ${error}`);
          });
  }

  ngOnInit() {
      this.getCards();
  }

}

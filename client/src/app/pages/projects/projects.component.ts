import { Component, OnInit } from '@angular/core';
import { projects } from '../../../appData.json';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectsData = projects;

  ngOnInit() {
  }

}

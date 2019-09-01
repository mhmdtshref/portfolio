import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../appData.json';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.less']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  data = projects;
  details = { name: '', link: '', gitLink: '', description: '', imageUrl: '' };

  getDetails = (id) => {
    this.details = {
      name: 'npm package',
      link: 'https://www.npmjs.com/package/form2',
      gitLink: 'https://github.com/mhmdtshref/form2',
      description: 'npm package for ReactJS technology that helps to create forms without need to use state.',
      imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg'
    };
  }

  ngOnInit() {
    this.getDetails(1);
  }

}

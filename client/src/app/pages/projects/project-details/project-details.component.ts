import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../appData.json';
import {RequestsService} from '../../requests.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.less']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private requestsService: RequestsService, private activatedRoute: ActivatedRoute) { }

  data = projects;
  details = { name: '', link: '', gitLink: '', description: '', imageUrl: '' };
  id = null;

  getDetails = (id) => {
    this.requestsService.getProject(id)
      .then((projectDetails: any) => {
        this.details = projectDetails;
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      });

    // this.details = {
    //   name: 'npm package',
    //   link: 'https://www.npmjs.com/package/form2',
    //   gitLink: 'https://github.com/mhmdtshref/form2',
    //   description: 'npm package for ReactJS technology that helps to create forms without need to use state.',
    //   imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg'
    // };
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetails(this.id);
  }

}

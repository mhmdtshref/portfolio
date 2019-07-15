import {Component, OnInit} from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects = [];

    constructor(private listsService: ListsService) { }

    getProjectsList = () => {
        this.listsService.getProjectsList()
            .then((projects: any) => {
                this.projects = projects;
            })
            .catch((error) => {
                alert(`Request Error: ${error.message}`);
            });
    }

    refreshList = () => {
        this.getProjectsList();
    };

    ngOnInit() {
        this.getProjectsList();
    }

}

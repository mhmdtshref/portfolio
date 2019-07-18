import {Component, OnInit} from '@angular/core';
import { ListsService } from '../lists.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects = [];

    constructor(private listsService: ListsService, private router: Router) { }

    getProjectsList = () => {
        this.listsService.getProjectsList()
            .then((projects: any) => {
                this.projects = projects;
            })
            .catch((error) => {
                alert(`Request Error: ${error.message}`);
            });
    }

    toCreateProject = () => {
        this.router.navigate(['projects', 'create']);
    }

    refreshList = () => {
        this.getProjectsList();
    };

    ngOnInit() {
        this.getProjectsList();
    }

}

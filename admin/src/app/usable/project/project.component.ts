import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    constructor(private requestService: RequestsService, private router: Router) { }

    @Input() project: any;
    @Input() refreshList: any;

    deleteClicked = false;

    deleteAction = (confirmState) => {
        if (confirmState) {
            this.requestService.deleteProject(this.project._id)
                .then(() => {
                    this.refreshList();
                })
                .catch((error) => {
                    alert(`Error: ${error.message}`);
                });
        } else {
            this.deleteClicked = false;
        }
    }

    onClickDeleteButton = () => {
        this.deleteClicked = true;
    }

    onClickEditButton = () => {
        this.router.navigate(['projects', this.project._id, 'edit']);
    }

    toProjectView = () => {
        this.router.navigate(['projects', this.project._id]);
    }

  ngOnInit() {
  }

}

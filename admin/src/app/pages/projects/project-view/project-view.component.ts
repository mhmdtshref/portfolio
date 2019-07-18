import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../../usable/requests.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  constructor(private requestsServices: RequestsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  id = '';
  project = {};
  projectKeys = [ 'link', 'gitLink', 'teamWork', 'imageUrl', 'description'];

  deleteClicked = false;

  toRegularString = (str) => {
      return str
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (replacedStr) => replacedStr.toUpperCase());
  }


    deleteAction = (confirmState) => {
        if (confirmState) {
            this.requestsServices.deleteProject(this.id)
                .then(() => {
                    this.router.navigate(['projects']);
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
        this.router.navigate(['projects', this.id, 'edit']);
    }


  ngOnInit() {
      this.id = this.activatedRouter.snapshot.paramMap.get('id');
      this.requestsServices.getProject(this.id).then((project) => {
          this.project = project;
          this.project[this.projectKeys[3]] = this.project[this.projectKeys[3]] ? 'Yes' : 'No';
      }).catch((error) => {
          alert(`Error: ${error.message}`);
      });
  }

}

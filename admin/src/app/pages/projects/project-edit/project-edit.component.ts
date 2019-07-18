import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RequestsService } from '../../../usable/requests.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private requestService: RequestsService, private router: Router) { }

  id = '';
  loading = 'Loading ...';
  name = this.loading;
  disabled = true;
  project = {
      name: this.loading,
      link: this.loading,
      gitLink: this.loading,
      imageUrl: this.loading,
      teamWork: this.loading,
      description: this.loading,
  };


    saveHandler = (event) => {
        event.preventDefault();
        this.requestService.editProject(this.id, this.project).then(() => {
            this.router.navigate(['projects', this.id]);
        }).catch((error) => {
            alert(`Error: ${error.message}`);
        });
    }

  ngOnInit() {
      this.id = this.activatedRouter.snapshot.paramMap.get('id');
      this.requestService.getProject(this.id)
          .then((project: any) => {
              this.project = project;
              this.name = project.name;
              this.disabled = null;
          })
          .catch((error) => {
              alert(`Error: ${error.message}`);
          });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../../usable/requests.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  constructor(private router: ActivatedRoute, private requestService: RequestsService) { }

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
        this.requestService.editProject(this.id, this.project);
    }

  ngOnInit() {
      this.id = this.router.snapshot.paramMap.get('id');
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

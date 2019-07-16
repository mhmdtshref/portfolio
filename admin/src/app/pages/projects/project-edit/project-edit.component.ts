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
  name = '';
  disabled = true;
  project = {
      name: null,
      link: null,
      gitLink: null,
      imageUrl: null,
      teamWork: null,
      description: null,
  };


    saveHandler = () => {
        console.log('PROJECT:: ', this.project);
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

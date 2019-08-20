import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../usable/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private requestsServices: RequestsService, private router: Router) { }

  project = { name: null, link: null, gitLink: null, imageUrl: null, teamWork: false, description: null };

  saveHandler = () => {
      if (this.project.name
          && this.project.link
          && this.project.gitLink
          && this.project.imageUrl
          && this.project.description !== null
      ) {
          this.requestsServices.createProject(this.project).then(() => {
              this.router.navigate(['projects']);
          }).catch((error) => {
              alert(`Error: ${error.message}`);
          });
      } else {
          alert('Fill all fields please!');
      }
  }

  ngOnInit() {
  }

}

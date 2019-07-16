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
  name = null;
  link = null;
  gitLink = null;
  imageUrl = null;
  teamWork = false;
  description = null;

  loading = 'Loading...';

  ngOnInit() {
      this.id = this.router.snapshot.paramMap.get('id');
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../../../usable/requests.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.scss']
})
export class ServiceEditComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private requestService: RequestsService, private router: Router) { }

    id = '';
    loading = 'Loading ...';
    name = this.loading;
    disabled = true;
    service = {
        name: this.loading,
        imageUrl: this.loading,
        brief: this.loading,
        description: this.loading,
    };

    saveHandler = (event) => {
        event.preventDefault();
        this.requestService.editService(this.id, this.service).then(() => {
            this.router.navigate(['services', this.id]);
        }).catch((error) => {
            alert(`Error: ${error.message}`);
        });
    }

  ngOnInit() {
      this.id = this.activatedRouter.snapshot.paramMap.get('id');
      this.requestService.getService(this.id)
          .then((service: any) => {
              this.service = service;
              this.name = service.name;
              this.disabled = null;
          })
          .catch((error) => {
              alert(`Error: ${error.message}`);
          });
  }

}

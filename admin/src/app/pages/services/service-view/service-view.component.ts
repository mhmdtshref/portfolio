import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../../usable/requests.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent implements OnInit {

  constructor(private requestsServices: RequestsService, private activatedRouter: ActivatedRoute, private router: Router) { }

    id = '';
    loading = 'Loading...';
    service = {
        name: this.loading,
        imageUrl: this.loading,
        brief: this.loading,
        description: this.loading,
    };
    serviceKeys = [ 'imageUrl', 'brief', 'description'];

    toRegularString = (str) => {
        return str
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (replacedStr) => replacedStr.toUpperCase());
    }

  ngOnInit() {
      this.id = this.activatedRouter.snapshot.paramMap.get('id');
      this.requestsServices.getService(this.id).then((service: any) => {
          this.service = service;
      }).catch((error) => {
          alert(`Error: ${error.message}`);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {ListsService} from '../lists.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    services = [];

    constructor(private listsService: ListsService, private router: Router) { }

    getServicesList = () => {
        this.listsService.getServicesList()
            .then((services: any) => {
                this.services = services;
            })
            .catch((error) => {
                alert(`Request Error: ${error.message}`);
            });
    }

    toCreateService = () => {
        this.router.navigate(['services', 'create']);
    }

    refreshList = () => {
        this.getServicesList();
    }

  ngOnInit() {
      this.getServicesList();
  }

}

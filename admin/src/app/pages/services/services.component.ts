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
/*        this.listsService.getServicesList()
            .then((projects: any) => {
                this.services = projects;
            })
            .catch((error) => {
                alert(`Request Error: ${error.message}`);
            });*/

        this.services = [
            {
                name: 'Web Development',
                imageUrl: 'https://image.flaticon.com/icons/svg/54/54776.svg',
                brief: 'Create web apps using trending web technologies or packages',
                description: 'Create web applications using trending web technologies or packages',
            },
            {
                name: 'Web Development',
                imageUrl: 'https://image.flaticon.com/icons/svg/54/54776.svg',
                brief: 'Create web apps using trending web technologies or packages',
                description: 'Create web applications using trending web technologies or packages',
            }
        ];
    }

    toCreateService = () => {
        this.router.navigate(['projects', 'create']);
    }

    refreshList = () => {
        this.getServicesList();
    }

  ngOnInit() {
      this.getServicesList();
  }

}

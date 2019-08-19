import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../../usable/requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

    constructor(private requestsServices: RequestsService, private router: Router) { }

    service = { name: null, imageUrl: null, brief: null, description: null };

    saveHandler = () => {
        if (this.service.name
            && this.service.imageUrl
            && this.service.brief
            && this.service.description !== null
        ) {
            this.requestsServices.createService(this.service).then(() => {
                this.router.navigate(['services']);
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

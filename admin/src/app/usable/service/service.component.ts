import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RequestsService} from '../requests.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {


    @Input() service: any;
    @Input() refreshList: any;

    deleteClicked = false;

    constructor(private router: Router, private requestService: RequestsService) { }

    toServiceView = () => {
        this.router.navigate(['services', this.service._id]);
    }

    onClickEditButton = () => {
        this.router.navigate(['services', this.service._id, 'edit']);
    }

    onClickDeleteButton = () => {
        this.deleteClicked = true;
    }

    deleteAction = (confirmState) => {
        if (confirmState) {
            this.requestService.deleteService(this.service._id)
                .then(() => {
                    this.refreshList();
                })
                .catch((error) => {
                    alert(`Error: ${error.message}`);
                });
        } else {
            this.deleteClicked = false;
        }
    }

    ngOnInit() {

    }

}

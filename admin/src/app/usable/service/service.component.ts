import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {


    @Input() service: any;
    @Input() refreshList: any;

    constructor(private router: Router) { }

    toServiceView = () => {
        this.router.navigate(['services', this.service._id]);
    }

    ngOnInit() {

    }

}

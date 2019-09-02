import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.less']
})
export class ProjectCardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() name: string;
  @Input() id: string;

  constructor(private router: Router) { }

  navigateToProjectDetails = () => {
    this.router.navigate(['projects', this.id]);
  }

  ngOnInit() {
  }

}

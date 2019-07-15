import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: object;

  deleteClicked = false;

  deleteAction = (confirmState) => {
      if (confirmState) {
          console.log('DELETED!');
      } else {
          console.log('Deletion Stoped!');
          this.deleteClicked = false;
      }
  }

  onClickDeleteButton = () => {
      this.deleteClicked = true;
  }

  ngOnInit() {
  }

}

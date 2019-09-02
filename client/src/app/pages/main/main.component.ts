import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  scrollToElementById = (elementId) => {
    const el = document.getElementById(elementId);
    el.scrollIntoView();
  }

  ngOnInit() {
    const elementId = this.activatedRoute.snapshot.paramMap.get('elementId');
    if (elementId) {
      this.scrollToElementById(elementId);
    }
  }

}

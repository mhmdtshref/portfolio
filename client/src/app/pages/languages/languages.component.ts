import { Component, OnInit } from '@angular/core';
import { languages } from '../../../appData.json';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.less']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  languagesData = languages;

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects = [
        {
            imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg',
            name: 'npm package', id: '5d20b4845117fb6e48e59576'
        },
        {
            imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg',
            name: 'npm package',
            id: '5d20b4845117fb6e48e59576'
        },
        {
            imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg',
            name: 'npm package', id: '5d20b4845117fb6e48e59576'
        },
        {
            imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg',
            name: 'npm package', id: '5d20b4845117fb6e48e59576'
        },
        {
            imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1561877296/npm-package_vlybe1.jpg',
            name: 'npm package', id: '5d20b4845117fb6e48e59576'
        },
    ];

  constructor() { }

  ngOnInit() {
  }

}

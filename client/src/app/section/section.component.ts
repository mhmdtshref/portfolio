import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less']
})
export class SectionComponent implements OnInit {

  constructor() { }

  @Input() title: string;

  getCards = () => {
    switch (this.title) {
      case 'Projects':
        return [{
          type: 1,
          details: {imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1560154760/HOWL_ujlted.jpg'}
        },
          {
            type: 1,
            details: {imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1560228120/GBMQ_mtwjzb.png'}
          },
          {
            type: 5,
            details: {link: 'https://www,github.com/mhmdtshref'}
          }];
      case 'Services':
        return [{
          type: 2,
          details: {
            iconUrl: 'https://image.flaticon.com/icons/svg/54/54776.svg',
            title: 'Web Development',
            description: 'Create web applications using trending web technologies or packages.'
          }
        },
          {
            type: 2,
            details: {
              iconUrl: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/desktop-512.png',
              title: 'Desktop Applictions',
              description: 'Create desktop applications for windows operating system using microsoft C# language'
            }
          },
          {
            type: 2,
            details: {
              iconUrl: 'https://www.freeiconspng.com/uploads/responsive-icon-10.png',
              title: 'Mobile Responsive',
              description: 'Able to create responsive websites and web applications to be used for desktops, tablets and mobile screens.'
            }
          }];
      case 'Languages':
        return [{
          type: 3,
          details: { imageUrl: 'https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png', title: 'C++'}
        },
          {
            type: 3,
            details: { imageUrl: 'https://www.freeiconspng.com/uploads/c-logo-icon-18.png', title: 'Microsoft C#'}
          },
          {
            type: 3,
            details: { imageUrl: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png', title: 'JavaScript'}
          },
          {
            type: 3,
            details: { imageUrl: 'https://image.flaticon.com/icons/png/512/226/226777.png', title: 'Java'}
          }];
      case 'Technologies':
        return [{
          type: 4,
          details: { imageUrl: 'https://res.cloudinary.com/howl1960/image/upload/v1560228692/Technologies_Section_ufoa2x.png' }
        }];
    }

  }

  ngOnInit() {
  }

}

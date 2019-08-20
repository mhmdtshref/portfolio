import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', [ '$event' ])
  scrollHandler() {
    const navEl = document.querySelector('#nav');
    const NavTitle = document.querySelector('#nav h3');
    const NavItems = document.querySelectorAll('#nav #navList li a');
    const fullHeight = window.innerHeight;
    const percentage = (pageYOffset / fullHeight) * 100;
    if (percentage > 30) {
      navEl.className = 'secondary-bg';
      NavTitle.className = 'secondary-text-color';
      NavItems.forEach(x => x.className = 'secondary-text-color');
    } else {
      navEl.className = 'primary-bg';
      NavTitle.className = 'primary-text-color';
      NavItems.forEach(x => x.className = 'primary-text-color');
    }
  }

  dropDownButtonClick = () => {
    document.getElementById('dropdownMenu').classList.toggle('show');
  }


  ngOnInit() {
  }

}

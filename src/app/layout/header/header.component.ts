import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('haState', [
      state('inactive', style({
        display: 'none'
      })),
      state('active',   style({
        display: 'block'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('haWidthState', [
      state('small', style({
        width: '200px'
      })),
      state('wide',   style({
        width: '340px'
      })),
      transition('small => wide', animate('200ms ease-in')),
      transition('wide => small', animate('200ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  date = new Date;
  year = this.date.getFullYear();
  myAge = this.year - 1987;
  age = this.myAge;
  activeState = 'inactive';
  inactiveState = 'active';
  width = 'small';

  constructor() { }

  haAnimate() {
    this.activeState = this.activeState === 'active' ? 'inactive' : 'active';
    this.inactiveState = this.inactiveState === 'active' ? 'inactive' : 'active';
    this.width = this.width === 'small' ? 'wide' : 'small';
  }

  ngOnInit() {
  }

}

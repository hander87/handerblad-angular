import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analogclock',
  templateUrl: './analogclock.component.html',
  styleUrls: ['./analogclock.component.css']
})
export class AnalogclockComponent implements OnInit {
  pratKlocka = 0;

  constructor() {}

  runTheClock(timeType) {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
    const minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
    const secPosition = (sec * 360) / 60;

    if (timeType === 'hour') {
      return hrPosition;
    }

    if (timeType === 'min') {
      return minPosition;
    }

    if (timeType === 'sec') {
      return secPosition;
    }

    if (timeType === null) {
      return null;
    }

    this.pratKlocka++;

  }

  returnHours() {
    return {transform: 'rotate(' + this.runTheClock('hour') + 'deg)'};
  }

  returnMinutes() {
    return {transform: 'rotate(' + this.runTheClock('min') + 'deg)'};
  }

  returnSeconds() {
    return {transform: 'rotate(' + this.runTheClock('sec') + 'deg)'};
  }

  ngOnInit() {
    setInterval(this.runTheClock, 1000);
  }
}

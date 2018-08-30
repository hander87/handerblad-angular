import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analogclock',
  templateUrl: './analogclock.component.html',
  styleUrls: ['./analogclock.component.css']
})
export class AnalogclockComponent implements OnInit {

  constructor() {}

  runTheClock() {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    // let timehour: string;
    // let timemin: string;
    let timeSec: any;

    console.log(
      'Analoga Klockan: "Klockan är ' + hr + ':' + min + ':' + sec + '"'
    );

    const hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
    const minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
    const secPosition = (sec * 360) / 60;

    // this.HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
    // this.MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
    // this.SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';

    // const hourHand = 'rotate(' + hrPosition + 'deg)';


      timeSec = 'transform: rotate(' + secPosition + 'deg)';

      console.log(timeSec);

  }

  ngOnInit() {
    setInterval(this.runTheClock, 1000);
  }
}

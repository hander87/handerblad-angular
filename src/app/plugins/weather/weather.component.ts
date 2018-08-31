import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherResponse: Subscription;
  temp: any;
  cond: String;
  code: String;
  window_img: String;
  weatherImage: String;
  weatherTemp: any;
  weatherFar: any;
  theWeather: String[] = [];
  theWeatherTemp: Number[] = [];
  theWeatherFar: Number[] = [];
  date = new Date();
  hour = this.date.getHours();

  constructor(private http: Http) {}

  ngOnInit() {

    const weatherApiUrl =
      'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.' +
      'forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%' +
      '20where%20text%3D%22stockholm%2C%20swe%22)&format=json&env=' +
      'store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

    this.weatherResponse = this.http.get(weatherApiUrl)
    .subscribe(
      (data: Response) => {
        this.temp = data.json().query.results.channel.item.condition.temp;
        this.cond = data.json().query.results.channel.item.condition.text;
        this.cond.toLowerCase();
        this.code = data.json().query.results.channel.item.condition.code;

    if ( (this.code === '29' && (this.hour > 19 || this.hour < 0o5)) || (this.code === '27' && (this.hour > 19 || this.hour < 0o5)) ) {
          this.window_img = 'window_cloudy_night';
      } else if ( this.code === '31' && (this.hour > 19 || this.hour < 0o5) ) {
        this.window_img = 'window_clear_night';
    } else if ( this.hour > 19 || this.hour < 0o5 ) {
          this.window_img = 'window_clear_night';
      } else if (
        this.cond === 'sunny' ||
        this.cond === 'fair' ||
        this.cond === 'hot' ||
        this.cond === 'mostly sunny' ||
        this.cond === 'clear'
      ) {
          this.window_img = 'window_sunny';
      } else if ( this.cond === 'partly cloudy' ) {
          this.window_img = 'window_partly_cloudy';
    } else if ( this.cond === 'partly cloudy' ) {
          this.window_img = 'window_cloudy';
      } else if (
        this.cond === 'showers' ||
        this.cond === 'thunderstorms' ||
        this.cond === 'drizzle' ||
        this.cond === 'freezing rain' ||
        this.cond === 'thundershowers' ||
        this.cond === 'isolated thunderstorms' ||
        this.cond === 'scattered thunderstorms' ||
        this.cond === 'scattered showers' ||
        this.cond === 'severe thunderstorms' ||
        this.cond === 'freezing rain' ) {
              this.window_img = 'window_raining';
      } else if (
        this.cond === 'snow showers' ||
        this.cond === 'scattered snow showers' ||
        this.cond === 'heavy snow' ||
        this.cond === 'mixed rain and hail' ||
        this.cond === 'mixed rain and snow' ||
        this.cond === 'snow flurries' ||
        this.cond === 'light snow showers' ||
        this.cond === 'snow' ||
        this.cond === 'hail' ||
        this.cond === 'sleet' ) {
              this.window_img = 'window_snowing';
      } else {
          this.window_img = 'window_cloudy';
      }

      let ctemp = (this.temp - 32) * .5556;
      ctemp = Math.floor(ctemp);
      console.log('Temp in C: ' + ctemp);

      if ( this.temp > 86 ) {
        this.temp = 100;
      }
      if ( this.temp < 5 ) {
          this.temp = 1;
      }
      this.temp = 100 - this.temp;

      this.theWeather.push(this.window_img);
      this.theWeatherFar.push(this.temp);
      this.theWeatherTemp.push(ctemp);
      this.getTheWeather();

    });

  }

  getTheWeather() {
    this.weatherImage = './assets/images/weather_imgs/' + this.theWeather[0] + '.jpg';
    this.weatherFar = this.theWeatherFar[0];
  }

  thermometerHeightStyle() {
    this.weatherTemp = this.theWeatherTemp[0];
    return { height: this.weatherTemp + 'px' };
  }

  ngOnDestroy() {
    this.weatherResponse.unsubscribe();
  }

}

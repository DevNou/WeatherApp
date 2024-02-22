import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  name: string = '';
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  summary: string = '';
  wind: number = 0;
  iconURL: string = '';
  data = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(town: string) {
    this.data = true;

    this.weatherService.getWeather(town).subscribe({

      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.name = this.myWeather.name;
        this.temperature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.summary = this.myWeather.weather[0].main;
        this.wind = this.myWeather.wind.speed;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed!')

    });
  }
  clearInput(){
    this.name='';
    window.location.reload();
  }
}
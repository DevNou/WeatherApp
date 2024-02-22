import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather()
  { 
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Thessaloniki&appid=9b047638b96b9636577cbcd50ebd0fd6&units=metric');
  }
}

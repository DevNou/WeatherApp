import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(town: string)
  { 
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=9b047638b96b9636577cbcd50ebd0fd6&units=metric`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/interfaces/city-intf';
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  weather = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${environment.apiKey}&`;
  forecast = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${environment.apiKey}&`;

  private cities$ = this.http
    .get<City[]>('./assets/cities-fr.json')
    .pipe(shareReplay());

  getCities() {
    return this.cities$;
  }
  getWeather(city: City) {
    return this.http.get(this.weather + 'q=' + city.nm);
  }
  getForecast(city: City) {
    return this.http.get(this.forecast + 'q=' + city.nm);
  }
}

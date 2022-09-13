import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: 'today-weather.component.html',
  styleUrls: ['today-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayWeatherComponent {
  constructor(private storeService: StoreService) {}
  @Input() weather: any;
  weatherData: any;

  public city$ = this.storeService.selectedCity$.pipe(map((city) => city?.nm));

  ngOnChanges() {
    this.weatherData = {
      icon: this.weather.weather[0]?.id,
      temp: this.weather.main?.temp,
    };
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-future-weather',
  templateUrl: 'future-weather.component.html',
  styleUrls: ['future-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FutureWeatherComponent implements OnChanges {
  constructor() {}
  @Input() forecast: any;
  public forecastdata: any;

  ngOnChanges() {
    this.forecastdata = this.forecast.list
      .filter((_: any, i: number) => i % 8 === 0)
      .slice(1, 4)
      .map((item: any) => ({
        day: new Date(item.dt_txt).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        icon: item.weather[0].id,
        max: item.main.temp_max,
        min: item.main.temp_min,
      }));
  }
}

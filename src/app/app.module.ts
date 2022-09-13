import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySelectComponent } from './components/city-select/city-select.component';
import { FutureWeatherComponent } from './components/future-weather/future-weather.component';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    TodayWeatherComponent,
    FutureWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

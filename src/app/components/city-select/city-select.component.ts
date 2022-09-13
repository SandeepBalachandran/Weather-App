import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Subscription, tap } from 'rxjs';
import { City } from 'src/app/interfaces/city-intf';
import { ApiService } from 'src/app/services/api/api.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-city-select',
  templateUrl: 'city-select.component.html',
  styleUrls: ['city-select.component.scss'],
})
export class CitySelectComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}
  public subscription!: Subscription;
  public cities$ = this.apiService.getCities();

  public cityForm = new FormGroup({
    city: new FormControl<City | null>(null),
  });

  ngAfterViewInit() {
    this.subscription = this.apiService
      .getCities()
      .pipe(
        map((cities) => cities[0]),
        tap((city) => this.cityForm.controls['city'].setValue(city))
      )
      .subscribe();
    this.onCityChange();
  }
  public onCityChange() {
    this.cityForm.controls['city'].valueChanges
      .pipe(
        tap((value) => {
          if (value) {
            this.storeService.setSelectedCity(value);
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpClient = inject(HttpClient)

  private readonly apiKey = signal('ce1a50007dceb0bc0b1e522ac5042da9')
  city = signal('tokyo')
  http = computed(() => `https://api.openweathermap.org/data/2.5/weather?q=${this.city()}&appid=${this.apiKey()}`)

  changeCity(newCity: string) {
    this.city.set(newCity)
  }

  getWeather = computed(() => this.httpClient.get(this.http()).pipe(
      catchError(error => {
        return of(null)
      })
    )
  )
}

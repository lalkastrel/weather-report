import { WEATHER_API_KEY } from './../../../../envirement';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  httpClient = inject(HttpClient)

  private readonly apiKey = signal(WEATHER_API_KEY)
  city = signal('')
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

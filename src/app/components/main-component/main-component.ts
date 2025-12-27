import { WeatherService } from './../../services/weather-service/weather-service';
import { Component, effect, inject } from '@angular/core';
import { SearchComponent } from '../search-component/search-component';
import { TempConverterPipe } from '../../pipes/temp-converter-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-component',
  imports: [SearchComponent, TempConverterPipe, DatePipe],
  templateUrl: './main-component.html',
  styleUrl: './main-component.less',
})
export class MainComponent {
  weatherService = inject(WeatherService)
  weather: any;

  private weatherEffect = effect(() => {
    const subscription = this.weatherService.getWeather().subscribe({
      next: data => this.weather = data,
      error: () => this.weather = null
    });
    
    return () => subscription.unsubscribe();
  });
}

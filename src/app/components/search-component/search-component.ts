import { WeatherService } from './../../services/weather-service/weather-service';
import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

@Component({
  selector: 'app-search-component',
  imports: [FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,],
  templateUrl: './search-component.html',
  styleUrl: './search-component.less',
})
export class SearchComponent {
  weatherService = inject(WeatherService) 
  protected readonly items = [
        'Minsk',
        'Tokyo',
        'Moscow',
        'New York',
    ] as const;

  protected city: string | null = this.items[0];

  onCityChange(city: string) {
    city = city.toLowerCase()
    this.weatherService.changeCity(city)
    console.log( this.weatherService.city())
  }
}

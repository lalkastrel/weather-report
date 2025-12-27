import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter',
})
export class TempConverterPipe implements PipeTransform {
  kelvinToCelsius = -273.15

  transform(value: string): string {
    return (+value + this.kelvinToCelsius).toFixed(2);
  }

}

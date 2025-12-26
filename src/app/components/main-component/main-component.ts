import { Component } from '@angular/core';
import { SearchComponent } from '../search-component/search-component';

@Component({
  selector: 'app-main-component',
  imports: [SearchComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.less',
})
export class MainComponent {

}

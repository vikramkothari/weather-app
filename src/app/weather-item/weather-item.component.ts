import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './views/weather-item.component.html',
  styleUrls: ['./views/weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() item: WeatherModelInternal;
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherServiceService } from './weather-item/services/weather-service.service';
import { WeatherModel } from './weather-item/model/weather-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'weather-app';
	cityName: string;
	isDataLoading = false;
	showErrorMessage = false;
	weatherData: WeatherModel;
	weatherModelInternals = [];
	constructor(private http: HttpClient,
		private weatherService: WeatherServiceService) {
	}

	search(): void {
		this.isDataLoading = true;
		this.weatherModelInternals = [];
		this.weatherService.search(this.cityName).subscribe((data: WeatherModel) => {
			this.weatherData = data;
			this.mapWeatherModel(this.weatherData);
			this.showErrorMessage = false;
			this.isDataLoading = false;
		},
			(error) => {
				this.showErrorMessage = true;
				this.isDataLoading = false;
			});
	}
	mapWeatherModel(apiModel: WeatherModel): void {
		apiModel.list.forEach((element, index) => {
			this.weatherModelInternals[index] = <WeatherModelInternal>{
				temperature: element.main.temp,
				maxTemperature: element.main.temp_max,
				minTemperature: element.main.temp_min,
				description: element.weather[0].description,
				date: element.dt_txt
			}
		});
	}
}

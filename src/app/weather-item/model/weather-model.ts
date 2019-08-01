export interface WeatherModel {
    city: {
        name: string;
        country: string;
    },
    list: [{
        dt_txt: string;
        main: {
            temp: number;
            temp_max: number;
            temp_min: number;
        },
        weather: [{
            description: string;
            icon: string;
        }]
    }]
}
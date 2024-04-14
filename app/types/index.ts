export interface ForcastCardProps {
  unit: string | number;
  data: {
    city: string;
    country: string;
    description: string;
    date: string;
    temp: number;
    max: number;
    min: number;
    sunrise: number;
    sunset: number;
    humidity: number;
    pressure: number;
    windDirection: number;
    windSpeed: number;
    cloudiness: number;
    weatherStatus: string;
  };
  isLoading: boolean;
  handleChangeLocation: () => void;
  handleToggleChange: (type: UnitType) => void;
}

export type UnitType = "imperial" | "metric";

export interface WeatherForecastProps {
  data: {
    data: {
      cod: string;
      message: number;
      cnt: number;
      list: {
        dt: number;
        main: {
          temp: number;
          feels_like: number;
          temp_min: number;
          temp_max: number;
          pressure: number;
          sea_level: number;
          grnd_level: number;
          humidity: number;
          temp_kf: number;
        };
        weather: {
          id: number;
          main: string;
          description: string;
          icon: string;
        }[];
        clouds: {
          all: number;
        };
        wind: {
          speed: number;
          deg: number;
          gust: number;
        };
        visibility: number;
        pop: number;
        sys: {
          pod: string;
        };
        dt_txt: string;
      }[];
      city: {
        id: number;
        name: string;
        coord: {
          lat: number;
          lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
      };
    };
  };
}

export interface WeatherInfo {
  city: string;
  country: string;
  description: string;
  weatherStatus: string;
  date: string;
  temp: number;
  max: number;
  min: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  pressure: number;
  windDirection: number;
  windSpeed: number;
  cloudiness: number;
}

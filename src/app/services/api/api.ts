export * from './account.service';
import { AccountService } from './account.service';
export * from './image.service';
import { ImageService } from './image.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [AccountService, ImageService, WeatherForecastService];

export enum TempUnit {
  CELCIUS,
  FAHRENHEIT,
}

export const kelvinToCelcius = (value: number): number => Math.round(value - 273.15);
export const celciusToFahrenheit = (value: number): number => Math.round(value * (9 / 5) + 32);
export const fahrenheitToCelcius = (value: number): number => Math.round(((value - 32) * 5) / 9);
export const kmToMile = (value: number): number => Math.round(value / 1.60934);
export const mileToKm = (value: number): number => Math.round(value * 1.60934);

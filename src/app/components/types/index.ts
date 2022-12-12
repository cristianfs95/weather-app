type Falsy = 0 | '' | false | null | undefined;
export const truthy = <T> (value: T): value is Exclude<T, Falsy> => Boolean(value as any);

export interface CitiesSelectorProps {
  cities: string[]
  setCity: (city: string) => void
}
export interface TemperatureProps {
  value: number
}
export interface WeatherIconProps {
  code: number
  isBig?: boolean
}

export interface ForecastItemProps {
  day: string
  weatherCode: number
  high: number
  low: number
  main: string
}

export interface ThemeContextProps {
  isDarkMode: boolean
  setToggleDarkMode: () => void
}

export interface ThemeProviderProps {
  children?: JSX.Element | JSX.Element[]
}

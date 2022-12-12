import backgroundIcon from '../assets/background.svg';
import darkModeBackgroundIcon from '../assets/darkModeBackground.svg';

export interface Theme {
  appTitleColor: string
  backgroundImage: string
  backgroundGradient: {
    color1: string
    color2: string
  }
  panelBgColor: string
  panelTitleColor: string
  selectorBgColor: string
  forecastPanelBgColor: string
  searchInput: {
    color: string
    placeholderColor: string
  }
  temperatureSwitch: {
    backgroundColor: string
    sliderColor: string
    textColor: string
  }
  searchSuggestion: {
    backgroundColor: string
    hoverBackgroundColor: string
    seperatorLineColor: string
  }
  smallIconColor: string
  smallIconTextColor: string
}

export const lightTheme: Theme = {
  appTitleColor: '#2F5D8A',
  backgroundImage: backgroundIcon,
  backgroundGradient: {
    color1: '#F9FFFF',
    color2: '#38C8E6'
  },
  panelBgColor: 'rgba(255, 255, 255, 0.75)',
  panelTitleColor: '#727E8E',
  selectorBgColor: 'rgba(255, 255, 255, 0.75)',
  forecastPanelBgColor: 'rgba(255, 255, 255, 0.75)',
  searchInput: {
    color: '#727E8E',
    placeholderColor: '#6898d5'
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff'
  },
  searchSuggestion: {
    backgroundColor: '#fff',
    hoverBackgroundColor: '#f9f9f9',
    seperatorLineColor: '#ccc'
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2'
};

export const darkTheme: Theme = {
  appTitleColor: '#2F5D8A',
  backgroundImage: darkModeBackgroundIcon,
  backgroundGradient: {
    color1: '#031027',
    color2: '#02101D'
  },
  selectorBgColor: 'rgba(5, 26, 51, 0.75)',
  panelBgColor: 'rgba(5, 26, 51, 0.75)',
  panelTitleColor: '#216397',
  forecastPanelBgColor: 'rgba(5, 26, 51, 0.75)',
  searchInput: {
    color: '#5f8bbf',
    placeholderColor: '#235A84'
  },
  temperatureSwitch: {
    backgroundColor: '#1b3657',
    sliderColor: '#437abd',
    textColor: '#718cac'
  },
  searchSuggestion: {
    backgroundColor: '#0f2744',
    hoverBackgroundColor: '#183553',
    seperatorLineColor: '#356097'
  },
  smallIconColor: '#153C5E',
  smallIconTextColor: '#3975AB'
};

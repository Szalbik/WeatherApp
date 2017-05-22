import axios from 'axios';

const API_KEY = '70c966fdfe8ca42969490d830c3a74ef';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);
  
  return {
     type: FETCH_WEATHER,
     payload: request
  };
}

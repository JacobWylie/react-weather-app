import axios from 'axios';

const API_KEY = 'ddd34ce11757e6e79f50da0645aa5675';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
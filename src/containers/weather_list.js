import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const { name, country } = cityData.city;
		const temps = cityData.list.map(weather => weather.main.temp - 273.15); // kelvin to celcius
		const wind = cityData.list.map(weather => weather.wind.speed);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const link = `https://openweathermap.org/city/${cityData.city.id}`;
		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={name}>
				<td>
					<a href={link} target='_blank'> 
						<span className="cityName">{'  '}{name}, {country}</span>
					</a>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td><Chart data={temps} color="#38adc0" units="℃" /></td>
				<td><Chart data={wind} color="#74b700" units="km/h" /></td>
				<td><Chart data={humidity} color="#d2c65a" units="%" /></td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="cityHead"><h5>City <span className="subheading">(current weather)</span></h5></th>
						<th className="chartHead"><h5>Temperature <span className="subheading">(℃)</span></h5></th>
						<th className="chartHead"><h5>Wind <span className="subheading">(km/h)</span></h5></th>
						<th className="chartHead"><h5>Humidity <span className="subheading">(%)</span></h5></th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {  // state.weather

	return { weather }; // key: vlaue pair are the same ie. weather: weather
}

export default connect(mapStateToProps)(WeatherList);
import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import propTypes from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "./../../services/transformWeather";
import weatherConnection from "./../../constants/weatherConnection";
import "./styles.css";

class WeatherLocation extends Component {
	//el constructor es lo primero que se ejecuta al momento de construye el componente, y se declara con la palabra reservada @constructor
	
	constructor(props) {
		super(); // constructor del componente base, desde donde se extiende el componente, o sea que viene de COMPONENT// buscar por que pasarle props

		const { city } = props;
		//este es el estado LOCAL o PARCIAL del componente, que ayuda a que se renderice
		this.state = {
			city,
			data: null
		};

		this.handleUpdateClick(city);
	}

	// al cambiar el state, parece que se hace una renderizacion con el nuevo state (usando el setState)
	handleUpdateClick = city => {
		// uso setState ya que es algo propio de react, y no funciona haciendo asignacion directa (solo funciona en el CONSTRUCTOR)
		let locationUrl = weatherConnection(city);
		fetch(locationUrl)
			.then(resolve => {
				return resolve.json();
			})
			.then(data => {
				const newWeather = transformWeather(data);

				this.setState({ data: newWeather });
			});
	};

	handleChange = event => {
		this.setState({ city: event.target.value });

		let locationUrl = weatherConnection(event.target.value);
		fetch(locationUrl)
			.then(resolve => {
				return resolve.json();
			})
			.then(data => {
				if (data.cod === 200) {
					const newWeather = transformWeather(data);
					this.setState({ data: newWeather });
				}
			});
	};

	//se usa la palabra reservada THIS debido a que en un componente de TIPO CLASE es necesario hacer referencia a los
	// metodos o funciones DENTRO de el.
	render() {

		const {wlClick} = this.props
		let { city, data } = this.state;

		return (
			<div className="weatherLocationContainer" onClick={wlClick}>
				<h2>Estamos en {this.state.city}</h2>
				<Input
					onChange={this.handleChange}
					defaultValue={this.state.city}
					className={"classInputRare"}
					inputProps={{
						"aria-label": "Description"
					}}
				/>
				<Location locationToFind={city} />
				{data ? <WeatherData data={data} /> : <CircularProgress size={50} />}

			</div>
		);
	}
}

//validacion de valores que llegan al componente
WeatherLocation.propTypes = {
	city: propTypes.string.isRequired,
	wlClick: propTypes.func,
};
export default WeatherLocation;

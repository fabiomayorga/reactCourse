import React from "react";
import Input from "@material-ui/core/Input";
import propTypes from "prop-types";
import "./styles.css";

class Location extends React.Component {
	
	constructor(country) {
		super(country); // constructor del componente base, desde donde se extiende el componente, o sea que viene de COMPONENT// buscar por que pasarle props

		let {locationToFind} = country
		console.log('country es' , country);
		//este es el estado LOCAL o PARCIAL del componente, que ayuda a que se renderice
		this.state = {
			locationToFind
		};
	}

	handleChange = event => {
		this.setState({ locationToFind: event.target.value });
	};

	render() {
		return (
			<div className="locationContainer">
			</div>
		);
	}
}

Location.propTypes = {
	locationToFind: propTypes.string.isRequired
};

export default Location;

import React from 'react';
import WeatherIcons from 'react-weathericons'
import { CLOUDY, CLOUD, SUN, RAIN, SNOW, WINDY } from '../../../constants/weathers';
import propTypes from 'prop-types';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [SNOW]: "day-fog"
}

const getWeatherIcon = (state) => {
    return <WeatherIcons className='wicon' name={icons[state]} size="2x" />
}

const WeatherTempeture = (props) => {

    const { tempeture, state } = props;
    return (
        <div className='weatherTempetureContainer'>
            {getWeatherIcon(state)}
            <span className='tempeture' > {tempeture}</span>
        </div>
    )
}

//validador de tipos de llegada
WeatherTempeture.propTypes = {
    tempeture: propTypes.number.isRequired,
    state: propTypes.string.isRequired
};

export default WeatherTempeture;
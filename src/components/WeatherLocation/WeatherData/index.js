import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempeture from './WeatherTempeture';
import {CLOUDY, CLOUD,SUN,RAIN, SNOW,WINDY} from '../../../constants/weathers';
import './styles.css';
import propTypes from 'prop-types';

//samples.openweathermap.org/data/2.5/weather?q=London&appid=ec0129bc18ea3cc04cf7093e67d98118

const WeatherData = ({ data }) => {
    
    const { tempeture, humidity, state, wind } = data;

    return (
        <div className='weatherdataContainer'>
            <WeatherTempeture tempeture={tempeture} state={state}></WeatherTempeture>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>            
        </div>
    )
}

WeatherData.propTypes = {
    data: propTypes.shape({
        tempeture: propTypes.number.isRequired,
        state: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired
    }
    )
}

export default WeatherData;
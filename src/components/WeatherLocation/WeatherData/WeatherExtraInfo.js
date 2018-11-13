import React from 'react'
import propTypes  from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div className='weatherExtraInfoContainer'>
            <span>{humidity + "%"}</span>
            <span>{" "+wind}</span>
        </div>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
}

export default WeatherExtraInfo;


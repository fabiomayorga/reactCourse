import React from "react";
import WeatherLocation from "../WeatherLocation";
import propTypes from "prop-types";

const LocationList = ({ locations, onSelectedLocation }) => {
    const handleWLClick = ( location ) => {
        console.log("testeando cadena", location);
        onSelectedLocation(location);
    };

    const iteratorLocations = locations => {
        //MAP me permite recibir el item y tambien su indice, como segundo parametro
        return locations.map(location => {
            //el atributo KEY es requerido por CUALQUIER COMPONENTE creado por mi, o por cualquier tercero, y me ayuda a que React reconozca un elemento y modificarlo, sin modificar los demás
            //Esto ayuda a que solo sean modificado lo que realmente ha cambiado, y hace que el DOM se refresque mas rapido. El KEY debe ser Unico

            return (
                <WeatherLocation
                    wlClick={ () => handleWLClick(location)}
                    key={location}
                    city={location}
                />
            );
        });
    };

    return <div className="gridi">{iteratorLocations(locations)}</div>;
};

LocationList.propTypes = {
    locations: propTypes.array.isRequired
};

export default LocationList;

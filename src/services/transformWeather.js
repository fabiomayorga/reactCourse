const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const state = "sun";

    const data = {
      humidity,
      tempeture: temp,
      state,
      wind: speed + " m/s"
    };
    return data;
};
  
export default transformWeather
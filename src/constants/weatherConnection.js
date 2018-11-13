const apiKey = "ec0129bc18ea3cc04cf7093e67d98118";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";

const apiUrl = city => {
   return `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
}

export default apiUrl
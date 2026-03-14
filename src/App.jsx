const searchCity = () => {

  const formattedCity = city.replace(",", "").trim();

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${formattedCity}`)
    .then((res) => res.json())
    .then((data) => {

      if (!data.results || data.results.length === 0) {

        // intentar solo con la primera palabra
        const simpleCity = formattedCity.split(" ")[0];

        return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${simpleCity}`)
          .then(res => res.json())
          .then(data => handleLocation(data));

      }

      handleLocation(data);

    });

};

function handleLocation(data){

  if (data.results && data.results.length > 0) {

    const location = data.results[0];

    setLatitude(location.latitude);
    setLongitude(location.longitude);

    setLocationName(`${location.name}, ${location.country}`);

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((weather) => {

        setTemperature(weather.current_weather.temperature);
        setWind(weather.current_weather.windspeed);

      });

  } else {

    alert("City not found.");

  }

}
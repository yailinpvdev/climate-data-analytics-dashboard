import { useState } from "react";
import ClimateChart from "./components/ClimateChart";
import MetricCard from "./components/MetricCard";

function App() {

  const [city, setCity] = useState("Bogota");
  const [latitude, setLatitude] = useState(4.711);
  const [longitude, setLongitude] = useState(-74.072);

  const [temperature, setTemperature] = useState("--");
  const [wind, setWind] = useState("--");

  const searchCity = () => {

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      .then((res) => res.json())
      .then((data) => {

        if (data.results && data.results.length > 0) {

          const location = data.results[0];

          setLatitude(location.latitude);
          setLongitude(location.longitude);

          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`
          )
            .then((res) => res.json())
            .then((weather) => {

              setTemperature(weather.current_weather.temperature);
              setWind(weather.current_weather.windspeed);

            });

        } else {

          alert("City not found");

        }

      });

  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1 style={{ textAlign: "center" }}>
        Climate Data Analytics Dashboard
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "200px"
          }}
        />

        <button
          onClick={searchCity}
          style={{
            padding: "10px 15px",
            cursor: "pointer"
          }}
        >
          Search
        </button>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >

        <MetricCard
          title="Temperature"
          value={`${temperature}°C`}
        />

        <MetricCard
          title="Wind Speed"
          value={`${wind} km/h`}
        />

        <MetricCard
          title="City"
          value={city}
        />

        <MetricCard
          title="Data Source"
          value="Open-Meteo"
        />

      </div>

      <ClimateChart latitude={latitude} longitude={longitude} />

    </div>
  );
}

export default App;
import { useState } from "react";
import ClimateChart from "./components/ClimateChart";
import MetricCard from "./components/MetricCard";

const cities = {
  Bucaramanga: { lat: 7.125, lon: -73.119 },
  Bogota: { lat: 4.711, lon: -74.072 },
  Medellin: { lat: 6.244, lon: -75.581 },
  Cali: { lat: 3.451, lon: -76.532 }
};

function App() {
  const [city, setCity] = useState("Bucaramanga");

  const latitude = cities[city].lat;
  const longitude = cities[city].lon;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Climate Data Analytics Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Select city: </label>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px" }}
        >
          {Object.keys(cities).map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        <MetricCard title="Temperature" value="26°C" />
        <MetricCard title="Wind Speed" value="8 km/h" />
        <MetricCard title="Humidity" value="75%" />
        <MetricCard title="Forecast" value="Sunny" />
      </div>

      <ClimateChart latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
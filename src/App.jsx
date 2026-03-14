import { useState } from "react";
import ClimateChart from "./components/ClimateChart";
import MetricCard from "./components/MetricCard";

function App() {

  const [city, setCity] = useState("Bucaramanga");
  const [latitude, setLatitude] = useState(7.125);
  const [longitude, setLongitude] = useState(-73.119);

  const searchCity = () => {

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
      .then((res) => res.json())
      .then((data) => {

        if (data.results && data.results.length > 0) {

          const location = data.results[0];

          setLatitude(location.latitude);
          setLongitude(location.longitude);

        } else {
          alert("City not found");
        }

      });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Climate Data Analytics Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>

        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={searchCity}>
          Search
        </button>

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
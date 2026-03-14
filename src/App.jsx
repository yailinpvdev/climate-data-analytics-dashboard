import { useState } from "react";
import ClimateChart from "./components/ClimateChart";
import MetricCard from "./components/MetricCard";

function App() {
  const [latitude, setLatitude] = useState(7.125);
  const [longitude, setLongitude] = useState(-73.119);

  const handleCitySearch = () => {
    // Bogotá
    setLatitude(4.711);
    setLongitude(-74.072);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Climate Data Analytics Dashboard</h1>

      <button
        onClick={handleCitySearch}
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          cursor: "pointer"
        }}
      >
        Show Bogotá Weather
      </button>

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
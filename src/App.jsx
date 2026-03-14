import ClimateChart from "./components/ClimateChart";
import MetricCard from "./components/MetricCard";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Climate Data Analytics Dashboard</h1>

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

      <ClimateChart />
    </div>
  );
}

export default App;
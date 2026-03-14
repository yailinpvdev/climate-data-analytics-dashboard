import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ClimateChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=7.125&longitude=-73.119&hourly=temperature_2m"
    )
      .then((response) => response.json())
      .then((result) => {

        const temperatures = result.hourly.temperature_2m;
        const times = result.hourly.time;

        const formattedData = times.slice(0, 24).map((time, index) => ({
          time: time.split("T")[1],
          temperature: temperatures[index]
        }));

        setData(formattedData);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: 350 }}>
      <h2>Temperature Forecast (Next 24 Hours)</h2>

      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ClimateChart;
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

function ClimateChart({ latitude, longitude }) {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`
    )
      .then((response) => response.json())
      .then((result) => {

        const temps = result.hourly.temperature_2m;
        const times = result.hourly.time;

        const formatted = times.slice(0, 24).map((t, i) => ({
          time: t.split("T")[1],
          temperature: temps[i]
        }));

        setData(formatted);

      });

  }, [latitude, longitude]);

  return (
    <div style={{ width: "100%", height: 350 }}>

      <h2>Temperature Forecast (Next 24 Hours)</h2>

      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ClimateChart;
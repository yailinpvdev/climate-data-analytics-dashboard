import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", temperature: 22 },
  { day: "Tue", temperature: 24 },
  { day: "Wed", temperature: 23 },
  { day: "Thu", temperature: 26 },
  { day: "Fri", temperature: 25 },
  { day: "Sat", temperature: 27 },
  { day: "Sun", temperature: 24 }
];

function ClimateChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Weekly Temperature</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ClimateChart;
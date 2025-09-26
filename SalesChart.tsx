import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function SalesChart({ data }: { data: any[] }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
import { useState } from "react";
import SalesChart from "./SalesChart";

const data2022 = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 350 },
  { month: "Mar", sales: 500 }
];
const data2023 = [
  { month: "Jan", sales: 600 },
  { month: "Feb", sales: 700 },
  { month: "Mar", sales: 800 }
];
const data2024 = [
  { month: "Jan", sales: 900 },
  { month: "Feb", sales: 950 },
  { month: "Mar", sales: 1000 }
];

export default function Dashboard() {
  const [year, setYear] = useState(2024);

  const getData = () => {
    if (year === 2022) return data2022;
    if (year === 2023) return data2023;
    return data2024;
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>
      <select
        className="border p-2 mb-4"
        onChange={(e) => setYear(Number(e.target.value))}
        value={year}
      >
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
      </select>
      <SalesChart data={getData()} />
    </div>
  );
}
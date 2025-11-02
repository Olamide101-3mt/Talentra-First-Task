import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const data = [
  {date: "Apr 14", income: 4000, expenses: 3500},
  {date: "Apr 15", income: 7000, expenses: 5000},
  {date: "Apr 16", income: 4500, expenses: 4700},
  {date: "Apr 17", income: 5500, expenses: 6200},
  {date: "Apr 18", income: 4200, expenses: 3900},
  {date: "Apr 19", income: 5200, expenses: 4800},
  {date: "Apr 20", income: 6400, expenses: 6100},
];

export default function WorkingChart(){
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Working Capital</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: "#16A34A"}}></span> Income
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-block w-3 h-3 rounded-full" style={{background: "#a7f432"}}></span> Expenses
          </div>
          <select className="text-sm border rounded-md px-3 py-1 bg-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#16A34A" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="expenses" stroke="#a7f432" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

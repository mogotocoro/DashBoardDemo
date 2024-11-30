import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, MoreHorizontal } from 'lucide-react';

const data = [
  { name: 'Mar 2023', revenue: 15000, target: 12000 },
  { name: 'Jun 2023', revenue: 12000, target: 13000 },
  { name: 'Sep 2023', revenue: 18000, target: 15000 },
  { name: 'Dec 2023', revenue: 16000, target: 14000 },
  { name: 'Mar 2024', revenue: 20000, target: 16000 },
];

export function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Revenue Over Time</h3>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Download className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#059669"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#F97316"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
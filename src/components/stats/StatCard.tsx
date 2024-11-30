import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: {
    value: number;
    label: string;
  };
  isPositive?: boolean;
}

export function StatCard({ title, value, change, isPositive = true }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <div className="flex items-center mt-2">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded ${
            isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
          }`}
        >
          {isPositive ? '+' : ''}{change.value}%
        </span>
        <span className="text-xs text-gray-500 ml-2">{change.label}</span>
      </div>
    </div>
  );
}
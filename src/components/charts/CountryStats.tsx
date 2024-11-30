import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const countries = [
  { name: 'Australia', sessions: 634, percentage: 8, flag: '🇦🇺' },
  { name: 'Indonesia', sessions: 589, percentage: 7.2, flag: '🇮🇩' },
  { name: 'Thailand', sessions: 562, percentage: 6.2, flag: '🇹🇭' },
  { name: 'Germany', sessions: 453, percentage: 5.4, flag: '🇩🇪' },
];

export function CountryStats() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Session by Country</h3>
          <p className="text-sm text-gray-500">Showing Data for Top Session</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center gap-4">
            <span className="text-2xl">{country.flag}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{country.name}</span>
                <span className="text-sm text-gray-500">
                  {country.sessions} • {country.percentage}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600"
                  style={{ width: `${country.percentage * 10}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
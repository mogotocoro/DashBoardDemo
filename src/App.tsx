import React from 'react';
import { Search, Download, Filter, Share, Bell, User } from 'lucide-react';
import { Sidebar } from './components/layout/Sidebar';
import { StatCard } from './components/stats/StatCard';
import { RevenueChart } from './components/charts/RevenueChart';
import { CountryStats } from './components/charts/CountryStats';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search anything here..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-[400px]"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Download className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </header>

          {/* Overview Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg flex items-center gap-2">
                  <Share className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <StatCard
                title="Total Income"
                value="$32,499.93"
                change={{ value: 12.95, label: "Compared to last month" }}
              />
              <StatCard
                title="Profit"
                value="$10,499.93"
                change={{ value: 0.33, label: "Compared to last month" }}
                isPositive={false}
              />
              <StatCard
                title="Total Views"
                value="5.211.832"
                change={{ value: 0.32, label: "Compared to last month" }}
              />
              <StatCard
                title="Conversion Rate"
                value="4,83%"
                change={{ value: 8.05, label: "Compared to last month" }}
              />
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <RevenueChart />
            </div>
            <div>
              <CountryStats />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
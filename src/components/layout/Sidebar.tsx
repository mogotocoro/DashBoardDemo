import React from 'react';
import { BarChart2, MessageSquare, Package, ShoppingCart, Layout, HelpCircle, Settings, FileText } from 'lucide-react';

const menuItems = [
  { icon: BarChart2, label: 'Overview', active: true },
  { icon: FileText, label: 'Performance' },
  { icon: Layout, label: 'Campaigns' },
  { icon: ShoppingCart, label: 'Orders' },
  { icon: Package, label: 'Products' },
  { icon: MessageSquare, label: 'Message' },
  { icon: Settings, label: 'Sales Platform' },
];

const bottomItems = [
  { icon: Layout, label: 'Demo Mode' },
  { icon: MessageSquare, label: 'Feedback' },
  { icon: HelpCircle, label: 'Help and docs' },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="font-semibold text-gray-900">Consist</span>
        </div>
      </div>

      <div className="flex-1">
        <div className="px-3">
          <p className="text-xs font-medium text-gray-500 px-3 py-2">MAIN MENU</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  item.active
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-3 space-y-1">
        {bottomItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
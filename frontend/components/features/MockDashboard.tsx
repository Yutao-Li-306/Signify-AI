'use client';

import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export function MockDashboard() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'analytics' | 'users'>('overview');
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'Total Users', value: 12450, change: 12.5, trend: 'up' },
    { label: 'Revenue', value: 245000, change: 8.3, trend: 'up' },
    { label: 'Active Sessions', value: 3420, change: -2.1, trend: 'down' },
    { label: 'Conversion Rate', value: 3.24, change: 15.7, trend: 'up' },
  ]);
  const [chartHeights, setChartHeights] = useState<number[]>([]);
  const [activityTimes, setActivityTimes] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  // Initialize client-only values
  useEffect(() => {
    setMounted(true);
    // Generate fixed chart heights on client
    setChartHeights(Array.from({ length: 12 }, () => Math.random() * 60 + 20));
    // Generate fixed activity times on client
    setActivityTimes(Array.from({ length: 4 }, () => Math.floor(Math.random() * 60)));
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + Math.floor(Math.random() * 10 - 5),
        change: metric.change + (Math.random() * 0.5 - 0.25),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Analytics Dashboard</h3>
            <p className="text-sm sm:text-base text-indigo-100">Real-time business insights</p>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                selectedTab === 'overview'
                  ? 'bg-white text-indigo-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('analytics')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                selectedTab === 'analytics'
                  ? 'bg-white text-indigo-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setSelectedTab('users')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                selectedTab === 'users'
                  ? 'bg-white text-indigo-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Users
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200"
            >
              <p className="text-xs sm:text-sm text-gray-600 mb-1">{metric.label}</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                {typeof metric.value === 'number' && metric.label === 'Revenue'
                  ? `$${metric.value.toLocaleString()}`
                  : typeof metric.value === 'number' && metric.label === 'Conversion Rate'
                  ? `${metric.value.toFixed(2)}%`
                  : metric.value.toLocaleString()}
              </p>
              <p
                className={`text-xs sm:text-sm mt-1 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.trend === 'up' ? '↑' : '↓'} {Math.abs(metric.change).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 overflow-x-auto">
          <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
            {selectedTab === 'overview' && 'Performance Overview'}
            {selectedTab === 'analytics' && 'Analytics Trends'}
            {selectedTab === 'users' && 'User Growth'}
          </h4>
          <div className="h-48 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 min-w-[400px] sm:min-w-0">
            {Array.from({ length: 12 }).map((_, i) => {
              const height = mounted && chartHeights[i] ? chartHeights[i] : 40;
              return (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`Month ${i + 1}`}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Jan</span>
            <span>Mar</span>
            <span>Jun</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-4 sm:mt-6">
          <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Recent Activity</h4>
          <div className="space-y-2">
            {['New user registration', 'Payment processed', 'Report generated', 'System update'].map(
              (activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="text-xs sm:text-sm text-gray-700">{activity}</span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {mounted && activityTimes[i] !== undefined ? activityTimes[i] : 0}m ago
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

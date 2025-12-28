'use client';

import { useState, useEffect, useMemo } from 'react';

interface DataPoint {
  date: string;
  value: number;
  category: string;
}

export function MockAnalytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'traffic' | 'conversions' | 'revenue'>('traffic');
  const [mounted, setMounted] = useState(false);
  const [dataValues, setDataValues] = useState<number[]>([]);
  const [categoryPercentages, setCategoryPercentages] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate data only on client side
  const data = useMemo(() => {
    if (!mounted) {
      // Return empty data for SSR
      return [];
    }
    
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    const values = Array.from({ length: days }, () => Math.floor(Math.random() * 1000) + 500);
    setDataValues(values);
    
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: values[i],
      category: ['Organic', 'Direct', 'Social', 'Email', 'Referral'][Math.floor(Math.random() * 5)],
    }));
  }, [timeRange, mounted]);

  // Generate category percentages only on client
  useEffect(() => {
    if (mounted) {
      setCategoryPercentages(
        Array.from({ length: 5 }, () => Math.random() * 30 + 10)
      );
    }
  }, [mounted]);

  const maxValue = data.length > 0 ? Math.max(...data.map(d => d.value), 1) : 1000;

  const categories = ['Organic', 'Direct', 'Social', 'Email', 'Referral'];
  const categoryColors = {
    Organic: 'bg-blue-500',
    Direct: 'bg-green-500',
    Social: 'bg-purple-500',
    Email: 'bg-yellow-500',
    Referral: 'bg-pink-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Analytics Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Advanced Analytics</h3>
            <p className="text-sm sm:text-base text-purple-100">Deep insights into your data</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm ${
                  timeRange === range
                    ? 'bg-white text-purple-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Metric Selector */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {(['traffic', 'conversions', 'revenue'] as const).map((metric) => (
            <button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors capitalize text-xs sm:text-sm ${
                selectedMetric === metric
                  ? 'bg-purple-100 text-purple-700 font-semibold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {metric}
            </button>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
          <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 capitalize text-sm sm:text-base">
            {selectedMetric} Over Time
          </h4>
          <div className="relative w-full" style={{ height: '192px', minHeight: '192px' }}>
            <div className="h-full flex items-end justify-start gap-1.5 sm:gap-2 pb-8 overflow-x-auto">
              {mounted && data.length > 0 ? (
                data.map((point, i) => {
                  const barHeight = maxValue > 0 ? Math.max((point.value / maxValue) * 100, 15) : 15;
                  const barWidth = timeRange === '7d' ? '20px' : timeRange === '30d' ? '14px' : '8px';
                  return (
                    <div
                      key={`${point.date}-${i}`}
                      className="group relative flex flex-col items-center justify-end flex-shrink-0"
                      style={{ width: barWidth }}
                      title={`${point.date}: ${point.value.toLocaleString()}`}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer shadow-sm"
                        style={{ 
                          height: `${barHeight}%`,
                          minHeight: '20px'
                        }}
                      />
                    </div>
                  );
                })
              ) : (
                // Placeholder during SSR
                Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-200 rounded-t flex-shrink-0" 
                    style={{ height: '40%', width: '14px', minHeight: '20px' }} 
                  />
                ))
              )}
            </div>
            {/* Date labels at bottom */}
            {mounted && data.length > 0 && (
              <div className="absolute bottom-0 left-0 flex items-center gap-1.5 sm:gap-2 overflow-x-auto">
                {data.map((point, i) => {
                  const barWidth = timeRange === '7d' ? '20px' : timeRange === '30d' ? '14px' : '8px';
                  if (i % Math.ceil(data.length / 7) === 0 || i === data.length - 1) {
                    return (
                      <div
                        key={`label-${i}`}
                        className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0"
                        style={{ width: barWidth, textAlign: 'center' }}
                      >
                        {point.date.split(' ')[1]}
                      </div>
                    );
                  }
                  return <div key={`spacer-${i}`} className="flex-shrink-0" style={{ width: barWidth }} />;
                })}
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Traffic Sources</h4>
            <div className="space-y-3">
              {categories.map((category, i) => {
                const percentage = mounted && categoryPercentages[i] !== undefined 
                  ? categoryPercentages[i] 
                  : 20;
                return (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700">{category}</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Key Metrics</h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: 'Total Visits', value: '124,567', change: '+12.5%' },
                { label: 'Bounce Rate', value: '32.4%', change: '-5.2%' },
                { label: 'Avg. Session', value: '4m 32s', change: '+8.1%' },
                { label: 'Pages/Visit', value: '3.8', change: '+2.3%' },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-2.5 sm:p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">{metric.label}</p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-green-600">
                    {metric.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

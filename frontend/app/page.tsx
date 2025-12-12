'use client';

import { useEffect, useState } from 'react';

interface ApiResponse {
  message: string;
  status: string;
  timestamp: string;
}

export default function Home() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch from /api (relative to current hostname)
    fetch('/api')
      .then(res => {
        if (!res.ok) {
          throw new Error(`API request failed: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setApiData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Signify AI
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Social Media Stock Market Signifier and Predictor App
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Signify AI
            </h2>
            <p className="text-gray-600 mb-4">
              Harnessing the collective wisdom of independent financial analysts
            </p>
            
            {/* API Status */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Backend API Status
              </h3>
              {loading && (
                <p className="text-gray-600">Loading API status...</p>
              )}
              {error && (
                <p className="text-red-600">Error: {error}</p>
              )}
              {apiData && (
                <div className="text-sm text-gray-600">
                  <p><strong>Status:</strong> {apiData.status}</p>
                  <p><strong>Message:</strong> {apiData.message}</p>
                  <p><strong>Timestamp:</strong> {apiData.timestamp}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mission
              </h3>
              <p className="text-gray-600">
                Aggregate analysis from Reddit, Discord, and other social forums 
                to identify top-performing independent analysts and generate winning 
                investment strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Opportunity
              </h3>
              <p className="text-gray-600">
                Leverage thousands of hours of human financial analysis from 
                independent analysts whose performance often rivals institutional firms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


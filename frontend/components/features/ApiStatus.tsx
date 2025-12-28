'use client';

import { useApiStatus } from '@/hooks/useApiStatus';

export function ApiStatus() {
  const { data, loading, error } = useApiStatus();

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Backend API Status
      </h3>
      {loading && <p className="text-gray-600">Loading API status...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {data && (
        <div className="text-sm text-gray-600">
          <p>
            <strong>Status:</strong> {data.status}
          </p>
          <p>
            <strong>Message:</strong> {data.message}
          </p>
          <p>
            <strong>Timestamp:</strong> {data.timestamp}
          </p>
        </div>
      )}
    </div>
  );
}

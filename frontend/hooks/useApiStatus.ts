import { useState, useEffect } from 'react';
import { healthApi, ApiStatusResponse } from '@/lib/api/health';

export function useApiStatus() {
  const [data, setData] = useState<ApiStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    healthApi
      .getStatus()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

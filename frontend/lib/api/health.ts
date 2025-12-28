import { apiClient } from './client';

export interface HealthResponse {
  status: string;
  service: string;
  timestamp: string;
}

export interface ApiStatusResponse {
  message: string;
  status: string;
  timestamp: string;
}

export const healthApi = {
  getHealth: (): Promise<HealthResponse> => {
    return apiClient.get<HealthResponse>('/health');
  },

  getStatus: (): Promise<ApiStatusResponse> => {
    return apiClient.get<ApiStatusResponse>('/');
  },
};

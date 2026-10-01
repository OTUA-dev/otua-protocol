/**
 * Types for the health endpoint.
 * Kept simple and local — these are not part of the public protocol API.
 */
export interface HealthResponse {
  status: 'ok' | 'degraded' | 'error';
  version: string;
  timestamp: string;
}

import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from './health.types.js';

/**
 * HealthController — exposes GET /health.
 *
 * Used by CI, load balancers, and infrastructure tooling to verify the API
 * is running. Does not reflect database or external service connectivity.
 * That will be extended in future phases when those dependencies are added.
 */
@Controller('health')
export class HealthController {
  @Get()
  check(): HealthResponse {
    return {
      status: 'ok',
      version: '0.1.0-foundation',
      timestamp: new Date().toISOString(),
    };
  }
}

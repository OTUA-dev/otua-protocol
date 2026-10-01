/**
 * Health controller unit test.
 *
 * Foundation phase: verifies the health endpoint returns the expected shape.
 * This test exists to prove the NestJS infrastructure is wired correctly.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    controller = moduleRef.get(HealthController);
  });

  it('returns status ok', () => {
    const result = controller.check();
    expect(result.status).toBe('ok');
  });

  it('returns a version string', () => {
    const result = controller.check();
    expect(typeof result.version).toBe('string');
    expect(result.version.length).toBeGreaterThan(0);
  });

  it('returns a valid ISO timestamp', () => {
    const result = controller.check();
    expect(() => new Date(result.timestamp)).not.toThrow();
    expect(new Date(result.timestamp).toISOString()).toBe(result.timestamp);
  });
});

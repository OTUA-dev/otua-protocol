/**
 * Vitest workspace configuration — OTUA Protocol monorepo.
 *
 * Each workspace package that includes tests must have its own
 * vitest.config.ts. This file tells Vitest where to find them.
 *
 * Docs: https://vitest.dev/guide/workspace
 */
import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  // Application packages
  'apps/web/vitest.config.ts',
  'apps/api/vitest.config.ts',

  // Shared packages
  'packages/types/vitest.config.ts',
  'packages/validation/vitest.config.ts',
  'packages/sdk/vitest.config.ts',
  'packages/config/vitest.config.ts',
]);

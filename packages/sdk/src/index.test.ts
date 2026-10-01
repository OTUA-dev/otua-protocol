/**
 * @otua/sdk — foundation smoke test.
 * Verifies the SDK package is importable and exports its version.
 */
import { describe, it, expect } from 'vitest';
import { OTUA_SDK_VERSION } from './index.js';

describe('@otua/sdk', () => {
  it('exports the foundation version constant', () => {
    expect(OTUA_SDK_VERSION).toBe('0.1.0-foundation');
  });
});

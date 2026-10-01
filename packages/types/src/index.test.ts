/**
 * @otua/types — foundation smoke test.
 * Verifies the package is importable and exports the expected foundation value.
 */
import { describe, it, expect } from 'vitest';
import { OTUA_TYPES_VERSION } from './index.js';

describe('@otua/types', () => {
  it('exports the foundation version constant', () => {
    expect(OTUA_TYPES_VERSION).toBe('0.1.0-foundation');
  });
});

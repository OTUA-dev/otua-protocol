/**
 * @otua/config — foundation smoke test.
 */
import { describe, it, expect } from 'vitest';
import { OTUA_CONFIG_VERSION } from './index.js';

describe('@otua/config', () => {
  it('exports the foundation version constant', () => {
    expect(OTUA_CONFIG_VERSION).toBe('0.1.0-foundation');
  });
});

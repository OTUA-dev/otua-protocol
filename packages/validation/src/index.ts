/**
 * @otua/validation — shared validation utilities for the OTUA Protocol.
 *
 * Foundation phase: this package is intentionally minimal.
 *
 * Validation rules for protocol operations (campaign creation, contributions,
 * fulfillment confirmation, etc.) will only be added AFTER the OTUA Protocol
 * Specification formally defines the invariants they must enforce.
 *
 * Financial invariants must never exist only in frontend code.
 * All protocol validation logic must be co-located in this package and
 * independently testable.
 *
 * See: PROTOCOL_SPEC.md, docs/protocol/
 */

export const OTUA_VALIDATION_VERSION = '0.1.0-foundation' as const;

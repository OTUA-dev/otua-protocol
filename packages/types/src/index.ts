/**
 * @otua/types — shared TypeScript type definitions for the OTUA Protocol.
 *
 * Foundation phase: this package is intentionally minimal.
 *
 * Protocol-specific types (Campaign, Contribution, Participant, etc.) will
 * only be added AFTER the OTUA Protocol Specification has been formally
 * written and the on-chain contract interface has been finalized.
 *
 * Do NOT add speculative domain types to satisfy placeholder code.
 *
 * See: PROTOCOL_SPEC.md, docs/protocol/
 */

// Placeholder export so the package compiles and is importable.
// Replace with real types as the protocol specification is completed.
export const OTUA_TYPES_VERSION = '0.1.0-foundation' as const;

export type { OtuaVersion } from './version.js';

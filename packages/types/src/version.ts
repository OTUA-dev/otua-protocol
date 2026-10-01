/**
 * Version type — tracks the semantic version of the OTUA Protocol
 * specification that a given implementation targets.
 *
 * This type exists to establish the pattern for future version-aware
 * protocol objects. It is not production-functional at foundation phase.
 */
export interface OtuaVersion {
  /** Semantic version string, e.g. "0.1.0-foundation" */
  version: string;
  /** Human-readable phase label */
  phase: string;
}

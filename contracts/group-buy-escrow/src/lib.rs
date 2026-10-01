// OTUA Protocol — Group-Buy Escrow Contract
//
// ============================================================================
// FOUNDATION PHASE — SKELETON ONLY
// ============================================================================
//
// This file is a compile-safe skeleton. It does NOT contain:
//
//   - Campaign creation logic
//   - Contribution logic
//   - Escrow logic
//   - Settlement logic
//   - Refund logic
//   - Access control logic
//   - Financial calculations
//   - Business rules of any kind
//
// Its sole purpose is to prove that the Rust workspace is correctly configured
// and that the repository can host a future Soroban implementation.
//
// Note: #![no_std] will be added when the Soroban SDK is introduced in
// Phase 3. The SDK provides the no_std environment and panic handler.
// For the foundation skeleton, std is used so the crate compiles on all
// platforms without requiring a custom panic handler.
//
// The contract logic will be implemented in a future phase AFTER:
//   1. The escrow mechanism is selected (see ADR-002).
//   2. The OTUA Protocol Specification defines the contract interface.
//   3. The Soroban SDK version has been formally selected and pinned.
//
// See:
//   contracts/group-buy-escrow/README.md
//   docs/decisions/ADR-002-escrow-model.md
//   PROTOCOL_SPEC.md
// ============================================================================

/// Placeholder type to keep the crate non-empty and compile-safe.
///
/// This type will be removed when the real contract implementation begins.
/// Do not build application logic on top of this placeholder.
pub struct GroupBuyEscrow;

#[cfg(test)]
mod tests {
    use super::*;

    /// Confirms the contract skeleton compiles and the crate is reachable.
    /// This test does not verify any protocol behavior.
    #[test]
    fn skeleton_compiles() {
        let _ = GroupBuyEscrow;
    }
}

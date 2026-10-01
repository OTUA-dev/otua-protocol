# ADR-002: Escrow Mechanism Selection

## Status

Pending

## Context

The OTUA Protocol requires a mechanism to hold participant contributions between the time of commitment and the final campaign outcome (settlement or refund). This mechanism is the trust foundation of the protocol.

Requirements:

1. Contributions must be held on-chain in a verifiable, non-custodial way.
2. Contributions must be returnable to participants if the campaign fails.
3. Contributions must be payable to the supplier upon confirmed fulfillment.
4. The mechanism must not require an off-chain party to release funds.
5. The rules must be auditable.
6. The mechanism must be viable on the Stellar network.

Several candidate mechanisms exist on Stellar. The right choice depends on the complexity of the protocol's state machine, the maturity of the Stellar toolchain, and the audit requirements.

## Decision

**Not yet made.**

This decision is explicitly deferred until after the protocol specification is complete and the full state machine has been reviewed. Implementing the contract before making this decision would result in rework.

## Alternatives Considered

### Option A — Soroban smart contract

A Soroban contract holds all escrow logic explicitly. Contributions are sent to the contract. The contract enforces all state transitions.

**Assessment:**

- Full programmability.
- Explicit, auditable rules.
- Supports complex state machines.
- Requires Soroban SDK and Rust expertise.
- Soroban is the most mature path for complex on-chain logic on Stellar.

### Option B — Stellar Claimable Balances

Native Stellar primitive for conditional fund holding. Conditions are encoded using built-in predicate types.

**Assessment:**

- No Soroban required.
- Proven, audited primitive.
- Condition expressiveness is limited to built-in predicate types.
- May be insufficient for multi-participant, multi-state campaign logic.
- Could be used as the custody layer with a Soroban contract for coordination.

### Option C — Hybrid (Claimable Balances + Soroban)

Claimable Balances handle fund custody. A Soroban contract handles coordination logic and state transitions.

**Assessment:**

- Separates custody from logic.
- Uses proven primitives for the most security-sensitive operation (fund custody).
- Increases system complexity.
- Two systems to reason about and audit.

## Consequences

Deferring this decision means:

- No contract logic can be implemented yet. This is intentional.
- The contract skeleton (`contracts/group-buy-escrow/`) exists only to prove Rust/Cargo setup.
- The escrow mechanism must be decided before Phase 3 work begins.

## Security Considerations

This is the highest-security decision in the protocol. The choice of escrow mechanism determines the attack surface for funds held by the protocol.

When a decision is made:

- The chosen mechanism must be reviewed by at least two technically qualified contributors.
- A security-focused analysis of the chosen mechanism must be written before implementation begins.
- The contract must be audited before any mainnet deployment.

## Follow-up

- Complete the protocol specification (PROTOCOL_SPEC.md).
- Evaluate Soroban SDK maturity and testnet availability.
- Write a formal comparison of the candidates against the finalized state machine requirements.
- Update this ADR to Accepted when the decision is made.
- Create follow-on ADR if the hybrid approach is chosen.

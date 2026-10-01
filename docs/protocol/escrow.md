# Escrow Model

> **Status: Undecided**
>
> The escrow mechanism for the OTUA Protocol has not been selected. This document records the concepts and constraints that will inform the decision. See [ADR-002](../decisions/ADR-002-escrow-model.md).

## Purpose

The escrow mechanism holds participant contributions between commitment and final outcome (settlement or refund). It is the trust foundation of the protocol: participants must be able to verify that their funds are protected on-chain, not by an application server.

## Requirements (not yet formally adopted)

- Contributions must be held in a non-custodial, verifiable way.
- Contributions must be returnable to participants if the campaign fails.
- Contributions must be payable to the supplier if fulfillment is confirmed.
- The escrow must not rely on any off-chain party to release funds.
- The rules governing release must be auditable.

## Candidate mechanisms

### Soroban smart contract

A Soroban contract holds the escrow logic explicitly. Contributions are sent to the contract. The contract enforces state transitions.

- Pro: Full programmability. Arbitrary logic.
- Pro: Explicit, auditable rules.
- Con: Requires Soroban SDK. Higher contract complexity.
- Con: Soroban toolchain maturity considerations.

### Stellar Claimable Balances

Native Stellar primitive for conditional fund holding.

- Pro: No Soroban required. Well-tested primitive.
- Con: Limited programmability — conditions are restricted to predefined types.
- Con: May not be expressive enough for complex campaign logic.

### Hybrid

Claimable Balances for fund holding, Soroban for coordination logic.

- Pro: Uses proven primitives for custody.
- Con: Increased complexity. Two systems to coordinate.

## Decision

**Not yet made.** See [ADR-002](../decisions/ADR-002-escrow-model.md).

Do not implement any escrow logic until this decision is made.

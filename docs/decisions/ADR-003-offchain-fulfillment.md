# ADR-003: Off-chain Fulfillment Verification

## Status

Proposed

## Context

The OTUA Protocol coordinates collective purchasing of physical goods. A campaign is fulfilled when the supplier delivers the goods to participants. For the contract to trigger settlement (payment to the supplier), it must receive a signal that fulfillment has occurred.

The problem: physical delivery cannot be verified on-chain. A blockchain cannot confirm that goods were delivered. It can only verify that a party with authorized credentials submitted a confirmation transaction.

This creates an irreducible off-chain trust assumption. The question is not whether to have a trust assumption, but how to make it as small, explicit, and verifiable as possible.

## Decision

**Proposed:** At initial MVP scope, fulfillment confirmation is treated as an off-chain signal submitted by a designated trusted party to the contract.

The specific authorized party and confirmation mechanism are not yet fully defined. Candidates include:

- The campaign creator (simplest, highest trust requirement)
- The supplier (incentivized to confirm, creates conflict of interest)
- A quorum of participants (more decentralized, higher UX friction)
- A designated third-party oracle (requires trust in a new party)

This decision is marked Proposed because the specific confirmation mechanism requires further design.

## Alternatives Considered

### Full on-chain verification

In theory, IoT sensors, zero-knowledge proofs, or oracle networks could provide automated physical delivery verification.

**Assessment:** Infeasible at MVP scope. Introduces significant complexity and cost. May be considered in future phases if appropriate oracle infrastructure becomes available on Stellar.

### Participant quorum confirmation

A threshold of participants confirm receipt before settlement is triggered.

**Assessment:** More decentralized. Better trust model. Higher coordination overhead. Requires careful design of the quorum mechanism and handling of non-responding participants. Preferred long-term direction.

### Supplier self-confirmation only

The supplier confirms their own fulfillment. Settlement is triggered automatically.

**Assessment:** Simple. But gives the supplier full control over settlement timing. Conflict of interest in dispute scenarios.

### Campaign creator confirmation

The campaign creator (buyer-side organizer) confirms fulfillment on behalf of participants.

**Assessment:** Simple. Concentrates trust in one off-chain party. Acceptable for MVP if the party is identified and accountable.

## Consequences

**Positive:**

- Simple to implement at MVP.
- Unblocks the settlement flow without requiring complex oracle infrastructure.

**Negative:**

- Creates an explicit off-chain trust assumption.
- Fulfillment disputes require an off-chain resolution mechanism.
- If the trusted confirmer is compromised or acts maliciously, fraudulent settlement could occur.

**Mitigations:**

- The trust assumption must be explicitly documented in every place it affects the protocol.
- A time-limited fulfillment window must exist — if confirmation does not occur within the window, refunds become available.
- A dispute escalation path must be designed in a future phase.

## Security Considerations

This is the most significant trust assumption in the OTUA Protocol at MVP scope.

- The authorization model for fulfillment confirmation must be explicitly defined in the contract.
- The authorized confirmer's identity must not be changeable after a campaign begins without appropriate safeguards.
- Refund availability must not be blocked by a missing or withheld fulfillment confirmation.

These constraints must be enforced in the contract, not assumed from the application layer.

## Follow-up

- Define the fulfillment confirmation authorization model in the contract design.
- Specify the fulfillment window duration and the refund trigger mechanism.
- Design a dispute escalation path for Phase 2+.
- Document the trust assumption explicitly in participant-facing documentation.
- Evaluate participant quorum confirmation as a future upgrade path.

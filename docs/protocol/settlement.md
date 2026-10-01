# Settlement

> **Status: Proposed / Pending**
>
> Settlement mechanics depend on the escrow mechanism, which is undecided. This document records the concept only.

## Definition

Settlement is the on-chain transfer of escrowed funds to the supplier upon successful fulfillment of a campaign.

## Preconditions (conceptual)

- Campaign reached its target.
- Fulfillment has been confirmed (mechanism TBD — see [ADR-003](../decisions/ADR-003-offchain-fulfillment.md)).
- Settlement has not already occurred.

## What must NOT happen

- Settlement must never be triggered by an off-chain party alone, without on-chain verification.
- Settlement must never occur if the campaign failed to meet its target.
- Partial settlement is not defined at this time.

## Open questions

- Who triggers settlement — the supplier, a participant, or an automated keeper?
- What constitutes fulfillment confirmation on-chain?
- What currency is settlement denominated in?
- Are there protocol fees deducted at settlement? (Out of scope for initial MVP.)

## See also

- [escrow.md](./escrow.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)
- [ADR-003](../decisions/ADR-003-offchain-fulfillment.md)

# Refunds

> **Status: Proposed / Pending**
>
> Refund mechanics depend on the escrow mechanism, which is undecided.

## Definition

A refund is the return of a participant's contribution when a campaign fails to meet its target, is cancelled, or fulfillment does not occur within an agreed window.

## Trigger conditions (conceptual)

- Campaign deadline passed and target not met → all contributions refundable.
- Campaign cancelled (if cancellation is permitted) → all contributions refundable.
- Fulfillment window expired without confirmation → contributions refundable (policy TBD).

## Requirements

- Refunds must be claimable by participants without requiring the supplier's cooperation.
- Refund availability must be provable on-chain.
- Refunds must return the exact contribution amount (no haircut).

## Open questions

- Are refunds automatic or participant-initiated?
- Is there a window for claiming refunds after which unclaimed amounts are handled differently?
- What happens to transaction fees paid during the contribution?

## See also

- [escrow.md](./escrow.md)
- [settlement.md](./settlement.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)

# Campaign Lifecycle

> **Status: Proposed / Pending**
>
> This document describes the intended campaign lifecycle concept. It has not been formally specified or reviewed. No implementation should be based on this document alone.

## Overview

A campaign moves through a sequence of states from creation to a terminal outcome. The state transitions are enforced on-chain by the escrow contract. The application layer observes and reflects state — it does not control it.

## Conceptual lifecycle

```
CREATED
   │
   │  (Participants commit contributions)
   ▼
ACTIVE (accepting contributions, deadline not yet reached)
   │
   ├──── Deadline reached, target NOT met ────► FAILED
   │                                               │
   │                                         (Refunds available)
   │                                               │
   │                                               ▼
   │                                           REFUNDED
   │
   └──── Deadline reached, target MET ────────► TARGET_MET
                                                   │
                                         (Supplier fulfills order)
                                                   │
                                         (Fulfillment confirmed)
                                                   ▼
                                              FULFILLING
                                                   │
                                         (Settlement triggered)
                                                   │
                                                   ▼
                                              SETTLED
```

## Terminal states

| State      | Meaning                                                                          |
| ---------- | -------------------------------------------------------------------------------- |
| `FAILED`   | Campaign did not meet target by deadline. Participants are eligible for refunds. |
| `REFUNDED` | All refunds have been processed.                                                 |
| `SETTLED`  | Funds have been transferred to the supplier. Order fulfilled.                    |

## Unresolved questions

- What triggers the deadline check — a keeper, a participant transaction, or a contract-internal mechanism?
- What constitutes fulfillment confirmation, and who provides it?
- Are partial refunds possible if some but not all fulfillment is completed?
- Can a campaign be cancelled before its deadline?

These questions must be resolved in the protocol specification before implementation.

## See also

- [state-machine.md](./state-machine.md)
- [escrow.md](./escrow.md)
- [refunds.md](./refunds.md)
- [fulfillment.md](../protocol/fulfillment.md) _(not yet created)_
- [ADR-002](../decisions/ADR-002-escrow-model.md)

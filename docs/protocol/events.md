# Protocol Events

> **Status: Proposed / Pending**
>
> The event schema depends on the escrow mechanism and contract interface, which are not yet decided. This document records the anticipated event types only.

## Purpose

Protocol events are emitted by the on-chain contract as state transitions occur. They are the primary mechanism by which the indexer learns about campaign activity.

Events must be:

- Emitted for every meaningful state transition.
- Structured consistently so the indexer can decode them deterministically.
- Documented alongside the contract interface.

## Anticipated event types

| Event                   | Trigger                                            | Payload (TBD)                          |
| ----------------------- | -------------------------------------------------- | -------------------------------------- |
| `CampaignCreated`       | Campaign registered on-chain                       | campaign_id, target, deadline, creator |
| `ContributionMade`      | Participant commits funds                          | campaign_id, participant, amount       |
| `ContributionWithdrawn` | Participant withdraws before deadline (if allowed) | campaign_id, participant, amount       |
| `TargetMet`             | Deadline passed, target reached                    | campaign_id, total_amount              |
| `CampaignFailed`        | Deadline passed, target not reached                | campaign_id, total_amount              |
| `FulfillmentConfirmed`  | Fulfillment signal received                        | campaign_id, confirmer                 |
| `SettlementComplete`    | Funds transferred to supplier                      | campaign_id, amount, supplier          |
| `RefundAvailable`       | Contributions eligible for refund                  | campaign_id                            |
| `RefundClaimed`         | Participant claimed refund                         | campaign_id, participant, amount       |

## Event schema

The precise event schema (field names, types, encoding) will be defined when the contract interface is designed. Do not hardcode these field names in any application layer code yet.

## See also

- [state-machine.md](./state-machine.md)
- [indexer/README.md](../../indexer/README.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)

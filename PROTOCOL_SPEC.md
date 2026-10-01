# Protocol Specification

OTUA Protocol — technical protocol specification.

> **Status: Draft / In Progress**
>
> This document describes the intended protocol behavior. It is not yet complete or formally reviewed. No implementation should be based on this document alone. Sections marked **TBD** or **Undecided** must be resolved before implementation of the relevant component.

---

## Purpose

The protocol specification defines:

- The actors and their roles
- The data structures
- The state machine
- The valid state transitions and their guards
- The event schema
- The failure cases and invariants
- The trust assumptions

This document is the authoritative source for what the smart contract must enforce.

---

## Terminology

See [docs/glossary.md](./docs/glossary.md) for canonical definitions.

Key terms: Campaign, Participant, Contribution, Supplier, Target, Deadline, Fulfillment, Settlement, Refund, Escrow.

---

## Actors

| Actor                     | Description                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Campaign Creator**      | Registers a campaign on-chain. Defines the target, deadline, and supplier. May or may not be the supplier.      |
| **Participant**           | Commits a contribution to an active campaign. Eligible for refund if the campaign fails.                        |
| **Supplier**              | The entity designated to receive settlement funds upon fulfillment confirmation.                                |
| **Fulfillment Confirmer** | The party authorized to submit a fulfillment confirmation signal to the contract. Definition TBD (see ADR-003). |

---

## Campaign data model (conceptual)

The following fields represent the anticipated campaign data. The exact on-chain representation depends on the escrow mechanism decision.

| Field                 | Type               | Description                                                      |
| --------------------- | ------------------ | ---------------------------------------------------------------- |
| `campaign_id`         | Identifier         | Unique campaign identifier                                       |
| `creator`             | Stellar address    | Address that created the campaign                                |
| `supplier`            | Stellar address    | Address to receive settlement funds                              |
| `target_amount`       | Asset amount       | Total contribution target required to proceed                    |
| `asset`               | Stellar asset      | The asset contributions are denominated in                       |
| `deadline`            | Timestamp / ledger | Point after which no new contributions are accepted              |
| `fulfillment_window`  | Duration           | Time after target_met within which fulfillment must be confirmed |
| `state`               | Enum               | Current campaign state                                           |
| `total_contributions` | Amount             | Running total of committed contributions                         |

> These fields are illustrative. The actual storage model will be defined in [docs/contracts/storage.md](./docs/contracts/storage.md) when the contract is designed.

---

## State machine

See [docs/protocol/state-machine.md](./docs/protocol/state-machine.md) for the full state machine.

States: `CREATED` → `ACTIVE` → `TARGET_MET` / `FAILED` → `SETTLED` / `REFUNDED`

---

## Protocol operations (conceptual)

### create_campaign

Registers a new campaign on-chain.

**Caller:** Campaign Creator  
**Preconditions:** Valid target, deadline in the future, valid supplier address  
**Result:** Campaign created in `CREATED` state  
**Invariants:** Target > 0. Deadline > current time. Supplier != zero address.  
**Status:** Not yet specified.

### contribute

Commits a participant's contribution to an active campaign.

**Caller:** Participant  
**Preconditions:** Campaign is in `ACTIVE` state. Deadline has not passed.  
**Result:** Contribution recorded. Funds held in escrow. `total_contributions` updated.  
**Invariants:** Contribution amount > 0. Total contributions cannot exceed target by more than one contribution amount (exact overflow handling TBD).  
**Status:** Not yet specified.

### close_campaign

Evaluates the campaign at its deadline and transitions to `TARGET_MET` or `FAILED`.

**Caller:** TBD — keeper, participant, or automatic  
**Preconditions:** Deadline has passed.  
**Result:** State transitions to `TARGET_MET` or `FAILED`.  
**Status:** Not yet specified.

### confirm_fulfillment

Signals that the supplier has fulfilled the order.

**Caller:** Fulfillment Confirmer (authorization model TBD — see ADR-003)  
**Preconditions:** Campaign is in `TARGET_MET` state. Fulfillment window has not expired.  
**Result:** Campaign transitions to `FULFILLING`.  
**Status:** Not yet specified.

### settle

Transfers escrowed funds to the supplier.

**Caller:** TBD  
**Preconditions:** Campaign is in `FULFILLING` state.  
**Result:** Funds transferred to supplier. Campaign transitions to `SETTLED`.  
**Invariants:** Amount transferred = total_contributions. No funds retained by the contract.  
**Status:** Not yet specified.

### claim_refund

Returns a participant's contribution.

**Caller:** Participant  
**Preconditions:** Campaign is in `FAILED` state OR fulfillment window expired.  
**Result:** Participant's contribution returned. Tracked as refunded.  
**Invariants:** Participant cannot claim more than their original contribution. Cannot claim twice.  
**Status:** Not yet specified.

---

## Invariants

Protocol invariants that the contract must enforce. These are non-negotiable.

1. The sum of all contributions held in escrow must always equal `total_contributions`.
2. Settlement must never occur if `total_contributions < target_amount`.
3. A participant must never receive a refund exceeding their original contribution.
4. Refunds and settlement are mutually exclusive for any given campaign.
5. No state transition may occur after a campaign reaches a terminal state.
6. Contributions must not be accepted after the campaign deadline.

---

## Failure cases

| Scenario                                           | Expected behavior                                                    |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| Deadline reached, target not met                   | Campaign transitions to FAILED. All contributions become refundable. |
| Fulfillment window expires without confirmation    | Contributions become refundable.                                     |
| Supplier address is invalid                        | Campaign creation must fail.                                         |
| Contribution amount is zero                        | Contribution must be rejected.                                       |
| Duplicate refund claim                             | Second claim must be rejected.                                       |
| Settlement called without fulfillment confirmation | Must be rejected.                                                    |

---

## Unresolved decisions

| Decision                                         | Status           | Reference |
| ------------------------------------------------ | ---------------- | --------- |
| Escrow mechanism (Soroban vs Stellar primitives) | Undecided        | ADR-002   |
| Who authorizes `close_campaign`                  | TBD              | —         |
| Fulfillment confirmation authorization model     | Proposed         | ADR-003   |
| Fulfillment window duration                      | TBD              | —         |
| Asset denomination policy                        | TBD              | —         |
| Protocol fees                                    | Out of MVP scope | —         |
| Cancellation policy                              | TBD              | —         |

These decisions must be resolved before implementation of the relevant operations begins.

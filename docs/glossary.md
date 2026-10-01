# Glossary

Canonical definitions of terms used in the OTUA Protocol specification and codebase.

Precision in terminology matters for a financial protocol. When a term is used in code, documentation, or a smart contract, it should match one of the definitions below. If a term is used inconsistently, that is a documentation bug.

---

## Campaign

A time-bounded collective purchasing event. A campaign defines a target quantity or value of goods, a deadline, and the conditions under which it proceeds to fulfillment or fails.

> Status: concept defined. Formal specification pending.

---

## Participant

An individual or entity that commits a contribution to a campaign. A participant's commitment is conditional: it is only converted to a payment obligation if the campaign meets its target.

> Status: concept defined. Formal specification pending.

---

## Contribution

A participant's conditional commitment of funds toward a campaign target. The mechanics of how contributions are held, confirmed, and either converted to payment or refunded depend on the escrow mechanism, which has not yet been selected.

> Status: concept defined. Escrow mechanics pending (see ADR-002).

---

## Target

The aggregate quantity, value, or threshold that a campaign must reach by its deadline for fulfillment to proceed. The exact definition of "target" (units, value, participant count, or a combination) is determined per-campaign.

> Status: concept defined. Formal specification pending.

---

## Deadline

The point in time after which no new contributions are accepted and the campaign outcome (proceed or fail) is determined.

> Status: concept defined. On-chain enforcement mechanism pending (see ADR-002).

---

## Fulfillment

The process by which the supplier delivers goods to participants after a campaign successfully meets its target. Fulfillment is initially treated as an off-chain process with on-chain confirmation signals. See [ADR-003](./decisions/ADR-003-offchain-fulfillment.md).

> Status: concept defined. Verification mechanism pending.

---

## Settlement

The on-chain transfer of funds from escrow to the supplier upon fulfillment confirmation. The settlement mechanism is unresolved at foundation phase. See [ADR-002](./decisions/ADR-002-escrow-model.md).

> Status: concept defined. Mechanism undecided.

---

## Refund

The return of a participant's contribution when a campaign fails to meet its target, is cancelled, or fulfillment does not occur within an agreed window. Refund mechanics depend on the escrow mechanism.

> Status: concept defined. Mechanism undecided.

---

## Supplier

An entity that commits to fulfilling an order when a campaign meets its target. The supplier's identity, verification, and obligations are off-chain concerns at foundation phase.

> Status: concept defined. Formal specification pending.

---

## Escrow

The mechanism by which participant contributions are held until the campaign outcome is determined. The escrow mechanism has not been selected. See [ADR-002](./decisions/ADR-002-escrow-model.md).

> Status: **undecided.** Do not implement.

---

## On-chain

Operations, data, and guarantees enforced by a Stellar smart contract or Stellar primitive. On-chain guarantees are authoritative.

---

## Off-chain

Operations and data managed outside the Stellar network (application servers, databases, fulfillment logistics). Off-chain systems must not be confused with on-chain guarantees. Where off-chain data influences on-chain state, the trust assumptions must be explicitly documented.

---

## Protocol

The OTUA Protocol: the set of rules, data structures, state transitions, and actor obligations that define how a group-buy campaign operates from creation through settlement or failure. The protocol is what the smart contract enforces on-chain.

---

## Application layer

The web and API services that participants interact with. The application layer reads protocol state from the chain (via the indexer) and submits transactions. It does not define protocol rules.

---

## Indexer

A service that reads Stellar/Soroban events and writes them to a queryable database. The indexer is a derived read model, not a source of truth. See [indexer/README.md](../indexer/README.md).

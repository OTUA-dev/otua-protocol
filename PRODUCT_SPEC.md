# Product Specification

OTUA Protocol — problem definition and product concept.

> **Status: Draft.** This document describes the problem the protocol is intended to solve and the initial product concept. It is not a technical specification.

---

## The problem

### Collective purchasing is common. Trustless coordination is not.

Group buying exists everywhere:

- Agricultural cooperatives pooling demand for seeds, fertilizer, or equipment
- Diaspora communities purchasing bulk goods for family or community shipment
- Regional buying groups aggregating orders for wholesale pricing
- Small businesses coordinating commodity purchases to reach supplier minimums
- Community organizations purchasing supplies for shared projects

In all of these cases, the fundamental challenge is the same:

> **How do you coordinate commitment from multiple buyers before money moves, without any single party holding everyone's funds at risk?**

### The current solutions

| Solution                                          | Problem                                                                                                              |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Informal coordination (group chats, spreadsheets) | No enforcement. Commitment is not binding. Campaigns fail due to drop-offs.                                          |
| Platform escrow (Kickstarter model)               | A centralized platform holds funds. Requires trust in the platform operator. Platform fees. Geographic restrictions. |
| Buyer organizer holds funds                       | The organizer takes custody of everyone's money. Creates concentration of trust and legal exposure.                  |
| No coordination, individual orders                | Buyers pay retail prices. Volume discounts never materialize.                                                        |

None of these provide a mechanism where:

- Commitment is conditional and binding
- No single party holds custody before the campaign closes
- Refunds are guaranteed if the campaign fails — without requiring anyone's cooperation

### Why Stellar

Stellar is a payments-focused blockchain with low transaction costs, fast finality, and existing infrastructure for asset issuance and exchange. The Soroban smart contract platform extends Stellar with programmable logic suitable for escrow-style applications.

OTUA Protocol uses Stellar to provide on-chain guarantees that cannot be provided by a platform, spreadsheet, or trusted organizer.

---

## The OTUA Protocol concept

OTUA Protocol is a set of on-chain rules, off-chain application interfaces, and coordination tools that enable:

1. A **supplier** or **organizer** to register a group-buy campaign with a target quantity/value and a deadline
2. **Participants** to commit contributions to the campaign before the deadline
3. Contributions to be held on-chain until the campaign outcome is determined
4. **Settlement** (payment to supplier) when the target is met and fulfillment is confirmed
5. **Automatic refund availability** when the campaign fails to meet its target

The protocol is designed to be open — anyone with access to the Stellar network can participate, without requiring permission from a platform operator.

---

## What OTUA is NOT

### Not an investment platform

OTUA Protocol is designed for **collective purchasing of goods for consumption or use** — not for pooling capital to generate profit or returns.

The distinction matters:

| Category A — Collective purchasing                   | Category B — Investment pooling                              |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| Participants buy goods they intend to use or consume | Participants contribute capital expecting a financial return |
| The goal is access to goods at better prices         | The goal is profit or yield                                  |
| Success = goods delivered                            | Success = financial return                                   |
| Supplier is paid for delivering goods                | Capital is deployed into financial instruments               |

**Category B is explicitly outside the initial MVP scope** and may introduce materially different legal and regulatory requirements depending on jurisdiction. OTUA Protocol does not design for, support, or encourage investment pooling in its initial implementation.

If a future use case introduces investment-like mechanics, this must be a deliberate, explicitly reviewed protocol extension — not an organic feature creep.

### Not a payment processor

OTUA Protocol coordinates the on-chain escrow and settlement layer. Payment processing, KYC, anti-money-laundering compliance, and regulatory obligations are the responsibility of applications built on the protocol, not the protocol itself.

### Not a marketplace

OTUA Protocol does not operate a supplier directory, provide discovery for buyers, or take a platform fee. It provides the coordination primitive. Applications may build marketplaces on top.

---

## Initial MVP scope

The initial MVP targets simple, verifiable group-buy scenarios:

- A single supplier, a single product or product bundle
- A fixed target (quantity or total value)
- A fixed deadline
- Contributions in a single Stellar asset (XLM or a stablecoin)
- Fulfillment confirmation via a designated trusted party (see [ADR-003](./docs/decisions/ADR-003-offchain-fulfillment.md))

Multi-supplier, multi-asset, and partial-fulfillment scenarios are out of MVP scope.

---

## Example use cases

These are illustrative examples of intended use. None are implemented.

- **Agricultural cooperative:** 40 smallholder farmers pool orders for certified seed to reach a supplier minimum order quantity. If fewer than 30 commit, everyone gets their money back.
- **Diaspora bulk shipment:** 20 families coordinate a container shipment of household goods from a supplier country. Payment releases when the container is confirmed shipped.
- **Community supply purchase:** A neighborhood association pools funds for bulk purchase of cleaning supplies. The order proceeds when the target is reached.

These examples involve physical goods with off-chain fulfillment. The trust assumptions for fulfillment verification are documented in [ADR-003](./docs/decisions/ADR-003-offchain-fulfillment.md).

---

## Out of scope (initial MVP)

- Multi-currency campaigns
- Fractional or partial fulfillment
- Recurring campaigns
- On-chain supplier reputation
- Dispute arbitration
- Secondary markets for campaign contributions
- Investment or yield-bearing mechanics
- KYC or identity verification

# Fulfillment

> **Status: Proposed / Pending**
>
> Fulfillment verification is initially treated as an off-chain concern with explicit trust assumptions. See [ADR-003](../decisions/ADR-003-offchain-fulfillment.md).

## Definition

Fulfillment is the process by which a supplier delivers the goods committed to in a campaign. For settlement to occur, the protocol must be satisfied that fulfillment has taken place.

## Off-chain nature of physical fulfillment

Physical goods cannot be verified on-chain. A blockchain cannot confirm that a bag of grain was delivered to a participant's location. What the chain can verify is that a designated party — or a threshold of parties — has submitted a fulfillment confirmation signal.

This is a trust assumption. It must be explicit, documented, and minimized.

## Current assumption (ADR-003)

At initial MVP scope, fulfillment confirmation is treated as an off-chain signal submitted by a trusted party (TBD) to the contract. The contract accepts this signal and transitions to the `FULFILLING` state, enabling settlement.

This assumption creates a trust vector that must be understood by all participants.

## Future considerations

- Multi-party confirmation (e.g. a quorum of participants confirm receipt)
- Dispute resolution mechanisms
- Partial fulfillment handling
- Time-limited fulfillment windows

None of these are implemented or formally specified yet.

## See also

- [ADR-003](../decisions/ADR-003-offchain-fulfillment.md)
- [settlement.md](./settlement.md)
- [lifecycle.md](./lifecycle.md)

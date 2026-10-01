# Protocol State Machine

> **Status: Proposed / Pending**
>
> The state machine described here is a conceptual draft. It has not been formally reviewed. Implementation must wait for the formal protocol specification.

## Campaign states

| State        | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `CREATED`    | Campaign has been registered on-chain. Not yet accepting contributions.         |
| `ACTIVE`     | Campaign is open. Contributions are being accepted. Deadline has not passed.    |
| `TARGET_MET` | Deadline passed and cumulative contributions met or exceeded the target.        |
| `FAILED`     | Deadline passed and cumulative contributions did not meet the target.           |
| `FULFILLING` | Supplier has begun fulfillment. Settlement has not yet occurred.                |
| `SETTLED`    | Funds transferred to supplier. Campaign is complete.                            |
| `REFUNDED`   | All participant contributions have been returned. Campaign is closed.           |
| `CANCELLED`  | Campaign was cancelled before deadline (if cancellation is permitted). **TBD.** |

## Transitions

| From         | To           | Trigger                  | Guard                                       |
| ------------ | ------------ | ------------------------ | ------------------------------------------- |
| `CREATED`    | `ACTIVE`     | Campaign start           | Start time reached                          |
| `ACTIVE`     | `TARGET_MET` | Deadline check           | Deadline reached AND contributions ≥ target |
| `ACTIVE`     | `FAILED`     | Deadline check           | Deadline reached AND contributions < target |
| `TARGET_MET` | `FULFILLING` | Fulfillment confirmation | TBD                                         |
| `FULFILLING` | `SETTLED`    | Settlement trigger       | Fulfillment confirmed                       |
| `FAILED`     | `REFUNDED`   | Refund completion        | All contributions returned                  |
| `ACTIVE`     | `CANCELLED`  | Cancellation             | TBD — cancellation policy not decided       |

## Unresolved questions

- Who is authorised to trigger each transition?
- Are state transitions atomic on-chain?
- How is the deadline checked — time-based or block-based?
- What is the fulfillment confirmation mechanism? (See ADR-003)

## See also

- [lifecycle.md](./lifecycle.md)
- [escrow.md](./escrow.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)
- [ADR-003](../decisions/ADR-003-offchain-fulfillment.md)

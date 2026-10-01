# Contract Architecture

> **Status: Proposed / Pending**
>
> The contract architecture depends on the escrow mechanism decision. See [ADR-002](../decisions/ADR-002-escrow-model.md).

## Overview

The OTUA Protocol contract layer is responsible for all on-chain enforcement of protocol rules. It is the authoritative source of truth for campaign state, contribution balances, and settlement outcomes.

## Current state

`contracts/group-buy-escrow/` contains a compile-safe Rust skeleton with no protocol logic. It exists to prove the Rust/Cargo workspace is correctly configured.

## Planned structure

Once the escrow mechanism is decided, the contract layer will likely be organized as:

```
contracts/
└── group-buy-escrow/
    ├── src/
    │   ├── lib.rs          — contract entry point
    │   ├── storage.rs      — storage key definitions
    │   ├── types.rs        — contract-internal types
    │   ├── campaign.rs     — campaign lifecycle logic
    │   ├── contributions.rs — contribution management
    │   ├── settlement.rs   — settlement logic
    │   ├── refunds.rs      — refund logic
    │   └── events.rs       — event definitions
    ├── Cargo.toml
    └── README.md
```

This structure is illustrative. The actual structure will be designed when the protocol specification is complete.

## Constraints

- No business logic may be implemented before the protocol specification is reviewed.
- Every state transition in the contract must correspond to a state in [docs/protocol/state-machine.md](../protocol/state-machine.md).
- Every event emitted must correspond to an event in [docs/protocol/events.md](../protocol/events.md).
- Security-sensitive code requires explicit tests.
- The contract must not store personal or sensitive user information on-chain.

## See also

- [storage.md](./storage.md)
- [authorization.md](./authorization.md)
- [security-model.md](./security-model.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)

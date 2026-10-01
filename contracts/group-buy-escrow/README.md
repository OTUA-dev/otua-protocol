# group-buy-escrow

OTUA Protocol — group-buy escrow smart contract.

## Status

**Foundation phase — intentionally a skeleton. This contract contains no protocol logic.**

> This contract skeleton exists solely to prove that the Rust/Cargo workspace is correctly configured and that the repository can host a future Soroban implementation.
>
> No protocol behavior is implemented here. Do not build application logic against this crate.

## What this contract will eventually do

Once the protocol specification and escrow mechanism are finalized (see [ADR-002](../../docs/decisions/ADR-002-escrow-model.md)), this contract will be responsible for the on-chain coordination of the OTUA group-buy lifecycle. The exact interface depends on decisions that have not yet been made.

Anticipated responsibilities (not yet specified, not yet implemented):

- Accepting and holding participant commitments during a campaign
- Enforcing campaign deadlines and target thresholds
- Triggering settlement when conditions are met
- Enabling refunds when conditions are not met

## What is NOT decided yet

- Whether the contract will use Soroban, Stellar Claimable Balances, or another mechanism
- The exact data model and storage layout
- The authorization model
- The event schema

These decisions are tracked in [ADR-002](../../docs/decisions/ADR-002-escrow-model.md).

## Building

```sh
cargo build
```

```sh
cargo test
```

Once the Soroban SDK is introduced, the WASM build target will be:

```sh
cargo build --target wasm32-unknown-unknown --release
```

## Dependencies

No Soroban SDK dependency is added at foundation phase. The SDK version will be pinned when the contract layer is implemented.

## See also

- [PROTOCOL_SPEC.md](../../PROTOCOL_SPEC.md)
- [docs/contracts/architecture.md](../../docs/contracts/architecture.md)
- [docs/decisions/ADR-002-escrow-model.md](../../docs/decisions/ADR-002-escrow-model.md)

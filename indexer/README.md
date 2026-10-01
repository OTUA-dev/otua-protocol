# Indexer

OTUA Protocol — event indexer.

## Status

**Not yet implemented.** This directory is a placeholder for the future indexer service.

## Role

The indexer sits between the Stellar network and the OTUA application layer:

```
Soroban / Stellar network events
           ↓
        Indexer
           ↓
  Read model / database
           ↓
          API
           ↓
          Web
```

Its purpose is to make on-chain state and events queryable by the application layer without requiring every query to hit Horizon or an RPC node directly.

## What the indexer is NOT

**The indexer is not the source of truth for financial settlement.**

Settlement authority belongs to the on-chain contract. The indexer is a derived read model — a performance and queryability layer. If the indexer and the chain disagree, the chain is correct.

## Planned responsibilities

- Stream contract events from Stellar (Soroban events via RPC or Horizon)
- Decode and validate event payloads against the protocol event schema
- Write structured records to a queryable database
- Expose the read model to the API
- Handle re-indexing and catch-up scenarios

None of these are implemented yet. They depend on the contract event schema being defined in [docs/protocol/events.md](../docs/protocol/events.md).

## Implementation phase

The indexer will be scoped and implemented after:

1. The contract layer is deployed to testnet (Phase 3).
2. The protocol event schema is defined.
3. The database/read model technology has been selected.

## Technology

Technology selection is pending. Likely candidates include a TypeScript service (NestJS or a standalone Node process) consuming Stellar Horizon or Soroban RPC event streams. No decision has been committed.

## See also

- [ARCHITECTURE.md](../ARCHITECTURE.md)
- [docs/protocol/events.md](../docs/protocol/events.md)
- [docs/decisions/ADR-002-escrow-model.md](../docs/decisions/ADR-002-escrow-model.md)

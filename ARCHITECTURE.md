# Architecture

OTUA Protocol system architecture.

> **Foundation phase.** All components marked "not yet implemented" are structural placeholders only.

## Principles

1. Protocol rules are defined before implementation.
2. Financial invariants are enforced on-chain, not in the application layer.
3. The boundary between on-chain guarantees and off-chain assumptions is explicit and documented.
4. The application layer reads state from the chain. It does not define protocol truth.
5. Every layer is independently testable.

## System layers

```
┌──────────────────────────────────────────────────┐
│                  Participants                    │
└──────────────────────┬───────────────────────────┘
                       │ HTTPS
┌──────────────────────▼───────────────────────────┐
│           Web Application  (apps/web)            │
│           Next.js · App Router · TypeScript      │
│           Foundation: home page only             │
└──────────────────────┬───────────────────────────┘
                       │ REST API
┌──────────────────────▼───────────────────────────┐
│              API Server  (apps/api)              │
│              NestJS · TypeScript                 │
│              Foundation: health endpoint only    │
└──────┬───────────────┬──────────────────┬────────┘
       │               │                  │
       │ read      ┌───▼────┐      ┌──────▼──────┐
       │ model     │Indexer │      │  Stellar /  │
       │           │(future)│      │  Soroban    │
       │           └───┬────┘      └──────┬──────┘
       │               │ indexes          │ submits / reads
┌──────▼──────┐    ┌───▼──────────────────▼──────┐
│  Database   │    │       Stellar Network        │
│  (future)   │    │  group-buy-escrow contract   │
└─────────────┘    │  Foundation: skeleton only   │
                   └──────────────────────────────┘
```

## On-chain / off-chain boundary

| Responsibility                  | Layer                | Authoritative?                 |
| ------------------------------- | -------------------- | ------------------------------ |
| Contribution custody            | On-chain contract    | Yes                            |
| Campaign deadline enforcement   | On-chain contract    | Yes                            |
| Target threshold check          | On-chain contract    | Yes                            |
| Settlement trigger              | On-chain contract    | Yes                            |
| Refund availability             | On-chain contract    | Yes                            |
| Fulfillment confirmation signal | Off-chain → contract | Trust assumption (see ADR-003) |
| Supplier identity verification  | Off-chain            | No — trust assumption          |
| Campaign discovery and browsing | Off-chain (indexer)  | Derived from chain             |
| Participant UX                  | Off-chain (web/api)  | No                             |

## Component responsibilities

### apps/web

Participant-facing web application. Next.js App Router. TypeScript.

Reads campaign state through the API. Submits transactions to Stellar via participant wallets. Does not hold funds. Does not define protocol rules.

### apps/api

Server-side API. NestJS. TypeScript.

Orchestrates reads from the indexer and writes to Stellar. Enforces application-level authorization. Does not enforce protocol financial invariants — that is the contract's job.

### packages/sdk

TypeScript client library. Provides typed wrappers for API and contract interactions.

Protocol methods will only be added after the protocol specification and contract interface are finalized.

### packages/types / packages/validation

Shared TypeScript types and validation logic. Used by both web and API. Protocol invariants belong in validation, not in frontend code.

### contracts/group-buy-escrow

Future Soroban smart contract. The on-chain authority for all protocol state transitions.

Escrow mechanism is undecided. See [docs/decisions/ADR-002-escrow-model.md](./docs/decisions/ADR-002-escrow-model.md).

### indexer/

Future service. Reads Stellar/Soroban events. Populates a queryable read model. Not a source of truth — derived from chain state.

## Key undecided architecture questions

| Question                                         | Status      | Reference |
| ------------------------------------------------ | ----------- | --------- |
| Escrow mechanism (Soroban vs Stellar primitives) | Undecided   | ADR-002   |
| Fulfillment confirmation model                   | Proposed    | ADR-003   |
| Database technology                              | Not decided | —         |
| Indexer technology                               | Not decided | —         |

See [docs/decisions/](./docs/decisions/) for all ADRs.

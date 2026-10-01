# Architecture

OTUA Protocol — system architecture overview.

> This document describes the intended architecture. Components marked **not yet implemented** exist only as structural placeholders.

## Layers

```
┌─────────────────────────────────────────────────────┐
│                  Participants / Users                │
└─────────────────────────┬───────────────────────────┘
                          │ HTTPS
┌─────────────────────────▼───────────────────────────┐
│              Web Application (apps/web)              │
│              Next.js · App Router · React            │
│              NOT YET IMPLEMENTED                     │
└─────────────────────────┬───────────────────────────┘
                          │ REST / future: GraphQL
┌─────────────────────────▼───────────────────────────┐
│                  API (apps/api)                      │
│                  NestJS · TypeScript                 │
│              Health endpoint only (foundation)       │
└──────┬──────────────────┬──────────────────┬────────┘
       │                  │                  │
       │ SQL        ┌─────▼────┐      ┌──────▼──────┐
       │            │ Indexer  │      │  Stellar /  │
       │            │(indexer/)│      │  Soroban    │
       │            │NOT IMPL. │      │  RPC / SDK  │
       │            └─────┬────┘      └──────┬──────┘
       │                  │ reads            │ submits txs
┌──────▼──────┐    ┌──────▼────────────────▼──────────┐
│  Database   │    │         Stellar Network           │
│(NOT IMPL.)  │    │   Soroban Contract / Primitives   │
│             │    │   contracts/group-buy-escrow/     │
└─────────────┘    │   SKELETON ONLY (foundation)      │
                   └───────────────────────────────────┘
```

## On-chain vs off-chain boundary

This boundary is one of the most important design decisions in the OTUA Protocol.

| Concern                        | Location              | Authority                        |
| ------------------------------ | --------------------- | -------------------------------- |
| Contribution holding           | On-chain (escrow)     | Contract                         |
| Campaign deadline enforcement  | On-chain              | Contract                         |
| Target threshold check         | On-chain              | Contract                         |
| Settlement trigger             | On-chain              | Contract                         |
| Refund trigger                 | On-chain              | Contract                         |
| Supplier identity verification | Off-chain             | Application + trust assumption   |
| Fulfillment confirmation       | Off-chain (initially) | See ADR-003                      |
| Participant identity           | Off-chain             | Application                      |
| Campaign discovery / browsing  | Off-chain             | Application (indexed from chain) |
| Read model / queries           | Off-chain             | Indexer (derived from chain)     |

The on-chain contract enforces **what must be true**. The application layer
communicates **what happened** and helps participants interact. These must never
be conflated.

## Components

### apps/web

The participant-facing web application. Built with Next.js App Router.

- Foundation phase: home page only.
- Future: campaign browsing, wallet connection, contribution UI.

### apps/api

The server-side API. Built with NestJS.

- Foundation phase: health endpoint only.
- Future: domain modules for campaigns, contributions, participants, fulfillment.

### packages/sdk

Client library for interacting with the OTUA Protocol API and eventually the Stellar contracts directly.

- Foundation phase: version export only.
- Future: typed API wrappers, transaction helpers, protocol state queries.

### packages/types

Shared TypeScript type definitions.

- Foundation phase: minimal.
- Future: protocol types derived from the specification.

### packages/validation

Shared validation logic.

- Foundation phase: minimal.
- Future: protocol invariant validation, shared by API and SDK.

### packages/config

Shared configuration utilities.

### contracts/group-buy-escrow

The on-chain escrow contract.

- Foundation phase: compile-safe skeleton only.
- Future: Soroban contract implementing the group-buy protocol.
- **Escrow mechanism is undecided.** See [ADR-002](./decisions/ADR-002-escrow-model.md).

### indexer/

Service that reads Stellar events and populates the read model.

- Foundation phase: not implemented.
- The indexer is a derived read model, not a source of truth.

## Technology decisions

See the [decisions/](./decisions/) directory for Architecture Decision Records.

Key open decisions:

- Escrow mechanism (Soroban vs Stellar primitives): **undecided** (ADR-002)
- Off-chain fulfillment verification model: **proposed** (ADR-003)
- Database technology: **not yet decided**
- Indexer implementation: **not yet decided**

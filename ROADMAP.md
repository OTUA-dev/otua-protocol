# Roadmap

OTUA Protocol development phases.

> Completion percentages are not assigned. Phases represent logical groupings of work, not time estimates. This is an open-source project — progress depends on contributor availability and protocol design decisions.

---

## Phase 1 — Foundation ✅ Current

**Goal:** Establish a professional, maintainable, contributor-ready engineering foundation.

- [x] TypeScript monorepo (pnpm + Turborepo)
- [x] Next.js web application foundation
- [x] NestJS API foundation with health endpoint
- [x] Shared packages: types, validation, sdk, config
- [x] Rust/Cargo workspace with contract skeleton
- [x] Documentation structure
- [x] ADR system (ADR-001, ADR-002, ADR-003)
- [x] CI workflows (lint, typecheck, test, build, contract, security)
- [x] Contributing guidelines, security policy, code of conduct

**What is NOT in Phase 1:**

- No protocol business logic
- No escrow implementation
- No financial flows
- No Stellar integration

---

## Phase 2 — Protocol Specification

**Goal:** Formally define the protocol before writing contract code.

- [ ] Complete PROTOCOL_SPEC.md with full state machine, invariants, and failure cases
- [ ] Resolve ADR-002 (escrow mechanism selection)
- [ ] Resolve ADR-003 (fulfillment confirmation model)
- [ ] Define the contract interface (function signatures, storage layout, events)
- [ ] Define the API contract (endpoint specifications)
- [ ] Define the protocol event schema
- [ ] Security review of the protocol specification

**Entry criteria:** None — this is documentation work.  
**Exit criteria:** Protocol specification reviewed and accepted by core contributors.

---

## Phase 3 — Contract Layer

**Goal:** Implement and test the on-chain escrow contract on Stellar testnet.

- [ ] Select and pin Soroban SDK version
- [ ] Implement campaign creation
- [ ] Implement contribution management
- [ ] Implement deadline enforcement
- [ ] Implement settlement
- [ ] Implement refund claims
- [ ] Comprehensive contract test suite
- [ ] Deploy to Stellar testnet
- [ ] Contract security review

**Entry criteria:** Protocol specification complete (Phase 2 done).  
**Exit criteria:** Contract deployed to testnet, all tests pass, security review complete.

---

## Phase 4 — API and Indexer

**Goal:** Implement the server-side API and event indexer against the deployed testnet contract.

- [ ] Database selection and setup
- [ ] Indexer implementation (Stellar event streaming → read model)
- [ ] API domain modules (campaigns, contributions, participants, suppliers, fulfillment)
- [ ] Authentication and authorization
- [ ] API test suite
- [ ] Integration tests (API + contract on testnet)

**Entry criteria:** Contract deployed to testnet (Phase 3 done).  
**Exit criteria:** API passes integration tests against testnet.

---

## Phase 5 — Web Application and SDK

**Goal:** Implement participant-facing UI and the client SDK.

- [ ] SDK protocol methods (campaign queries, contribution submission)
- [ ] Campaign browsing UI
- [ ] Wallet connection (Stellar wallet integration)
- [ ] Contribution UI
- [ ] Campaign status UI
- [ ] Refund claim UI
- [ ] End-to-end tests

**Entry criteria:** API implemented and stable (Phase 4 done).  
**Exit criteria:** Full end-to-end flow working on testnet.

---

## Phase 6 — Audit and Mainnet Preparation

**Goal:** Independent security audit and mainnet readiness.

- [ ] Independent smart contract audit
- [ ] Penetration testing of API layer
- [ ] Mainnet deployment checklist
- [ ] Operational runbooks
- [ ] Incident response plan

**Entry criteria:** All Phase 5 work complete.  
**Exit criteria:** Audit complete, all critical and high findings resolved.

---

## Not yet scheduled

The following items are acknowledged but not yet assigned to a phase:

- Dispute resolution mechanisms
- Participant quorum confirmation for fulfillment
- Multi-currency campaigns
- Supplier verification mechanisms
- Mobile applications
- Protocol fee model (if any)
- Governance model for protocol upgrades

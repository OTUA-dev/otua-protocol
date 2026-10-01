# Threat Model

> **Status: Initial draft — not yet reviewed.**
>
> This document will be developed further when the contract and API are implemented.

## Scope

This threat model covers the OTUA Protocol system: the web application, API, Soroban contract, indexer, and the Stellar network interaction.

## Assets

| Asset                                                    | Sensitivity |
| -------------------------------------------------------- | ----------- |
| Participant contributions (funds held in escrow)         | Critical    |
| Campaign configuration (target, deadline, supplier)      | High        |
| Participant identity / wallet addresses                  | Medium      |
| API authentication credentials                           | High        |
| Infrastructure secrets (DB connection strings, API keys) | High        |
| Contract deployment keys                                 | Critical    |

## Threat categories

### T1 — Financial loss via contract exploit

An attacker exploits a vulnerability in the escrow contract to drain funds or trigger unauthorized settlement.

**Mitigation:** Code audit before mainnet. Formal invariant tests. Minimal contract surface area.

### T2 — Fraudulent campaign creation

An attacker creates a campaign with a fraudulent supplier address, attracts contributions, and directs settlement to themselves.

**Mitigation:** Supplier verification (off-chain, TBD). Dispute mechanisms (TBD).

### T3 — API compromise

An attacker gains access to the API server and submits fraudulent transaction payloads on behalf of participants.

**Mitigation:** On-chain authorization — the contract verifies transaction signers. A compromised API cannot move funds the signer has not authorized.

### T4 — Indexer poisoning

An attacker manipulates the indexer's read model to show false campaign state.

**Mitigation:** The indexer is a read model. Participants should verify settlement/refund state directly on-chain when funds are at stake.

### T5 — Dependency supply chain attack

A compromised npm package or Rust crate introduces malicious code.

**Mitigation:** Pinned dependency versions. Dependency review in CI. `pnpm audit`. `cargo audit`.

### T6 — Secret exposure

A developer accidentally commits private keys, JWT secrets, or API credentials.

**Mitigation:** `.gitignore` covers `.env` files. Secret detection in CI. Pre-commit hooks (future). Never use real credentials in code examples.

### T7 — Personal information on-chain

A developer stores PII (names, addresses, contact details) in contract storage.

**Mitigation:** Explicit principle: no PII on-chain. Code review requirement. AI_AGENTS.md rule 13.

## Out of scope for foundation phase

- DDoS attacks against the application layer
- Physical security of infrastructure
- Legal/regulatory compliance framework

These will be addressed in later phases.

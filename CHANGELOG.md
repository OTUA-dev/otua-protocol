# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0-foundation] — Unreleased

### Added

- TypeScript monorepo with pnpm workspaces and Turborepo
- `apps/web` — Next.js 15 App Router application foundation (home page only)
- `apps/api` — NestJS 11 API foundation with health endpoint (`GET /health`)
- `packages/types` — shared TypeScript type definitions (foundation skeleton)
- `packages/validation` — shared validation utilities (foundation skeleton)
- `packages/sdk` — OTUA Protocol client SDK (foundation skeleton)
- `packages/config` — shared configuration utilities (foundation skeleton)
- `contracts/group-buy-escrow` — Rust/Soroban contract skeleton (no protocol logic)
- `indexer/` — placeholder directory for future event indexer
- `docs/` — full documentation structure:
  - Protocol documentation (lifecycle, state machine, escrow, fulfillment, settlement, refunds, events)
  - Contract documentation (architecture, storage, authorization, security model)
  - API and SDK documentation
  - Operations documentation
  - Security documentation (threat model, assumptions)
  - Architecture Decision Records (ADR-001, ADR-002, ADR-003)
- Root documentation: README, ARCHITECTURE, PROTOCOL_SPEC, PRODUCT_SPEC, ROADMAP, DEVELOPERS, AI_AGENTS, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT, SUPPORT
- GitHub foundation: CI workflow, contracts workflow, security workflow, issue templates, PR template
- Strict TypeScript configuration (strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitOverride, noUnusedLocals/Params)
- ESLint, Prettier, EditorConfig
- Rust toolchain file pinned to stable

### Notes

- Foundation phase only. No protocol business logic is implemented.
- Escrow mechanism is undecided (ADR-002: Pending).
- Fulfillment verification model is proposed but not finalized (ADR-003: Proposed).

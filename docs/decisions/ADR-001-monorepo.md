# ADR-001: TypeScript Monorepo Structure

## Status

Accepted

## Context

The OTUA Protocol consists of multiple related TypeScript components: a web application, an API, a client SDK, shared types, shared validation, and shared configuration. These components share significant code and must stay in sync with the protocol specification.

The project also includes a Rust/Soroban contract layer, which operates as a distinct runtime and toolchain.

Decisions needed:

- Should TypeScript packages be in a monorepo or separate repositories?
- Which monorepo tooling should be used?
- How should the Rust layer be integrated?

## Decision

Use a TypeScript monorepo managed with **pnpm workspaces** and **Turborepo**.

- `apps/` — runnable applications (Next.js web, NestJS API)
- `packages/` — shared libraries (types, validation, sdk, config)
- `contracts/` — Rust/Soroban layer (separate ecosystem, not a pnpm workspace)
- `indexer/` — future indexer service

Turborepo orchestrates build, lint, typecheck, and test tasks across the workspace with dependency-aware task execution and caching.

The Rust contract layer uses a Cargo workspace at the repository root, coexisting with the TypeScript monorepo without pretending they share a runtime.

## Alternatives Considered

### Separate repositories per package

- Pro: Independent versioning and CI per package.
- Con: Significant overhead for a protocol at early stage. Cross-package changes require coordinating multiple PRs. Harder to enforce consistency.

### Nx instead of Turborepo

- Pro: More features (module federation, project graph visualization).
- Con: Higher configuration complexity. Turborepo is sufficient for the current scope and simpler to understand for new contributors.

### Yarn workspaces / npm workspaces

- pnpm is chosen for its strict dependency isolation, disk efficiency, and active maintenance. pnpm workspaces provide the same functionality with better performance.

## Consequences

**Positive:**

- Cross-package changes land in a single PR.
- Shared types and validation are always in sync with the applications.
- Turborepo caching reduces CI time as the project grows.
- Single `pnpm install` installs all dependencies.

**Negative:**

- Developers must understand pnpm workspace semantics (`workspace:*` protocol, filter flags).
- The Cargo workspace coexists but is entirely separate — contributors working only on contracts may find the Node tooling overhead irrelevant.
- Monorepos can accumulate complexity if workspace hygiene is not maintained.

## Security Considerations

- Dependency isolation via pnpm prevents phantom dependency access.
- Pinned versions in all `package.json` files reduce supply chain risk.
- `pnpm audit` must be run in CI.

## Follow-up

- Set up Turborepo remote caching if/when CI times become a concern.
- Evaluate whether the indexer should be a pnpm workspace package when implemented.

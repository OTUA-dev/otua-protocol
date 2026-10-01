# Developer Guide

Everything you need to understand and work in the OTUA Protocol repository.

---

## Prerequisites

| Tool    | Version    | Install                       |
| ------- | ---------- | ----------------------------- |
| Node.js | 24+        | https://nodejs.org or via nvm |
| pnpm    | 12+        | `npm install -g pnpm@12`      |
| Rust    | stable     | https://rustup.rs             |
| Git     | any recent | https://git-scm.com           |

Verify your environment:

```sh
node --version    # v24.x.x
pnpm --version    # 12.x.x
rustc --version   # 1.x.x (stable)
cargo --version
```

---

## Installation

```sh
git clone <repository-url>
cd otua-protocol
pnpm install
```

This installs all TypeScript workspace dependencies in a single step.

For Rust:

```sh
# Ensure the wasm target is installed (required for future contract builds)
rustup target add wasm32-unknown-unknown
```

---

## Repository structure

```
otua-protocol/
├── apps/
│   ├── web/          — Next.js web application (@otua/web)
│   └── api/          — NestJS API server (@otua/api)
├── packages/
│   ├── sdk/          — Client SDK (@otua/sdk)
│   ├── types/        — Shared types (@otua/types)
│   ├── validation/   — Shared validation (@otua/validation)
│   └── config/       — Shared config (@otua/config)
├── contracts/
│   └── group-buy-escrow/  — Rust/Soroban contract
├── indexer/          — Future event indexer
├── docs/             — All documentation
├── scripts/          — Utility scripts
└── tests/            — Integration / E2E tests
```

---

## Package management

This repository uses **pnpm workspaces**. Always use `pnpm`, not `npm` or `yarn`.

```sh
# Install all workspace dependencies
pnpm install

# Add a dependency to a specific package
pnpm --filter @otua/api add express

# Add a dev dependency to the root
pnpm add -D some-tool -w

# Run a command in a specific package
pnpm --filter @otua/web build
```

Never use `npm install` or `yarn` in this repository.

---

## Workspace commands

Run from the repository root. Turborepo orchestrates the task across all packages.

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start all apps in development mode (parallel) |
| `pnpm build`        | Build all packages and apps                   |
| `pnpm lint`         | Lint all packages                             |
| `pnpm typecheck`    | TypeScript type check all packages            |
| `pnpm test`         | Run all tests (single run)                    |
| `pnpm test:watch`   | Run tests in watch mode                       |
| `pnpm format`       | Format all files with Prettier                |
| `pnpm format:check` | Check formatting without writing              |
| `pnpm check`        | format:check + lint + typecheck + test        |

---

## Local development

```sh
pnpm dev
```

- Web: http://localhost:3000
- API: http://localhost:3001
- Health: http://localhost:3001/health

## Environment variables

```sh
cp .env.example .env
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

Never commit `.env` files. See `.env.example` for documentation of all variables.

---

## Running individual workspaces

```sh
pnpm --filter @otua/web dev
pnpm --filter @otua/api dev
pnpm --filter @otua/types test
```

For contracts:

```sh
cargo build
cargo test
```

---

## Testing

```sh
# All tests
pnpm test

# Watch mode
pnpm test:watch

# Single package
pnpm --filter @otua/api test

# Rust
cargo test
```

Tests are colocated with source code (`src/**/*.test.ts`) for TypeScript packages. Integration tests belong in `tests/`.

---

## Linting

```sh
pnpm lint
```

Do not disable lint rules to make code compile. If a rule must be suppressed, add an inline comment explaining why.

---

## Formatting

```sh
# Format everything
pnpm format

# Check without writing (used in CI)
pnpm format:check
```

Prettier is the formatting authority. The `.prettierrc.json` at the root is the single source of configuration.

---

## Branch naming

```
feat/issue-123-short-description
fix/issue-456-short-description
docs/issue-789-update-protocol-spec
chore/issue-101-update-deps
```

Always include the issue number. No issue = no branch.

---

## Commit expectations

- Commits reference the related GitHub issue in the message body.
- Commit messages use the imperative mood: "Add health endpoint", not "Added health endpoint".
- One logical change per commit. Large changes should be split into reviewable commits.
- Do not commit `.env` files, secrets, or build artifacts.

---

## Issue workflow

1. All work begins with a GitHub issue.
2. If no issue exists for the work you want to do, create one.
3. Discuss scope and approach in the issue before implementing.
4. Assign yourself to the issue when you begin work.
5. Link your PR to the issue.

---

## Pull request workflow

1. Create a branch from `main`.
2. Make your changes.
3. Run `pnpm check` and ensure it passes.
4. Open a PR using the PR template.
5. Fill in all sections of the template.
6. Request review from relevant code owners.
7. Address review comments.
8. Squash or clean up commits if requested.
9. Merge when approved and CI passes.

---

## Architecture change workflow

Any change to system architecture requires an ADR.

1. Create a new ADR in `docs/decisions/ADR-NNN-title.md`.
2. Use the template in [docs/decisions/README.md](./docs/decisions/README.md).
3. Set status to `Proposed`.
4. Open a PR for discussion.
5. Update to `Accepted` when the PR is merged.
6. Update the ADR index in `docs/decisions/README.md`.

---

## Security-sensitive changes

Changes to:

- Financial logic
- Contract code
- Authentication / authorization
- Key management
- Settlement or refund mechanics

require:

- Explicit tests covering the security-relevant behavior
- A note in the PR description under "Security Considerations"
- Review by at least one additional contributor

---

## CODEOWNERS

Code ownership is defined in `.github/CODEOWNERS`.

If the CODEOWNERS file contains placeholder entries, update it with real GitHub usernames before merging security-sensitive code.

---

## AI-assisted development

If you use an AI coding assistant (GitHub Copilot, Cursor, Claude, etc.), read [AI_AGENTS.md](./AI_AGENTS.md) before doing so.

AI-generated code is subject to the same review requirements as human-written code.

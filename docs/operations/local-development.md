# Local Development

## Prerequisites

- Node.js 24+
- pnpm 12+
- Rust (stable, with `wasm32-unknown-unknown` target)
- Git

See [DEVELOPERS.md](../../DEVELOPERS.md) for detailed installation instructions.

## Quick start

```sh
git clone <repository-url>
cd otua-protocol
pnpm install
pnpm dev
```

`pnpm dev` starts the web application and API in parallel via Turborepo.

- Web: http://localhost:3000
- API: http://localhost:3001
- Health check: http://localhost:3001/health

## Available commands

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `pnpm install`      | Install all dependencies                   |
| `pnpm dev`          | Start all apps in development mode         |
| `pnpm build`        | Build all packages and apps                |
| `pnpm lint`         | Lint all packages                          |
| `pnpm typecheck`    | TypeScript type check all packages         |
| `pnpm test`         | Run all tests                              |
| `pnpm format`       | Format all files with Prettier             |
| `pnpm format:check` | Check formatting without writing           |
| `pnpm check`        | Run format:check + lint + typecheck + test |

## Running individual workspaces

```sh
# Web only
pnpm --filter @otua/web dev

# API only
pnpm --filter @otua/api dev

# A specific package
pnpm --filter @otua/types test
```

## Rust / Contract

```sh
# Build the contract skeleton
cargo build

# Run contract tests
cargo test
```

## Environment variables

Copy `.env.example` to `.env` in the repository root.
Copy `apps/web/.env.example` to `apps/web/.env.local`.
Copy `apps/api/.env.example` to `apps/api/.env`.

Never commit `.env` files.

## See also

- [DEVELOPERS.md](../../DEVELOPERS.md)
- [testnet.md](./testnet.md)

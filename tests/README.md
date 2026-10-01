# tests/

Root-level integration and end-to-end test directory for the OTUA Protocol.

## Status

Foundation phase — no integration tests have been written yet.

Unit tests live alongside source code in each package (`src/**/*.test.ts`).
This directory is reserved for tests that span multiple packages or require
a running infrastructure (API + database + Stellar testnet).

## Planned test categories

| Directory      | Description                                             |
| -------------- | ------------------------------------------------------- |
| `integration/` | Tests that require the API to be running                |
| `e2e/`         | Full end-to-end tests (web + API + contract on testnet) |
| `fixtures/`    | Shared test data and factory helpers                    |

None of these are implemented yet. They depend on:

- The API domain modules being implemented (Phase 2+)
- The contract being deployed to testnet (Phase 3+)

## Running unit tests (available now)

Unit tests within each package:

```sh
pnpm test
```

Or per-package:

```sh
pnpm --filter @otua/types test
pnpm --filter @otua/api test
```

## See also

- [DEVELOPERS.md](../DEVELOPERS.md)
- [docs/operations/local-development.md](../docs/operations/local-development.md)

# scripts/

Utility scripts for the OTUA Protocol repository.

## Status

Foundation phase — no scripts have been added yet.

Scripts will be added here as the project grows. Each script must have a clear,
documented purpose. Do not add scripts for operations that are already covered
by `pnpm` workspace commands or `cargo` commands.

## Planned script categories

| Category   | Description                                            |
| ---------- | ------------------------------------------------------ |
| `deploy/`  | Deployment scripts for contract and application layers |
| `testnet/` | Testnet setup and funding utilities                    |
| `db/`      | Database migration and seed helpers                    |
| `ci/`      | CI utility scripts called by GitHub Actions workflows  |

None of these are implemented yet.

## Guidelines

- Scripts must be documented with a header comment explaining what they do,
  what they require, and what side effects they produce.
- Scripts that interact with Stellar or a live database require explicit
  confirmation prompts before executing destructive operations.
- Never hardcode secrets or credentials in scripts. Use environment variables
  documented in `.env.example`.
- Scripts that are safe to run repeatedly must be idempotent where possible.

## See also

- [DEVELOPERS.md](../DEVELOPERS.md)
- [docs/operations/local-development.md](../docs/operations/local-development.md)

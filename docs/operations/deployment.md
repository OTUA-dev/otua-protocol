# Deployment

> **Status: Not yet available.**
>
> Deployment infrastructure will be designed and documented in a future phase.

## Environments

| Environment       | Status                               |
| ----------------- | ------------------------------------ |
| Local development | Available (see local-development.md) |
| Testnet           | Not yet provisioned                  |
| Mainnet           | Not yet planned                      |

## Production deployment principles (future)

When production deployment is designed, it must follow these principles:

- Infrastructure as code — all environment configuration tracked in version control.
- No secrets in code or version control.
- Contract deployments require multi-party approval.
- Mainnet deployment requires a completed security audit.
- Deployment scripts must be idempotent.

## See also

- [local-development.md](./local-development.md)
- [testnet.md](./testnet.md)

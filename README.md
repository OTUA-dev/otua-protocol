# OTUA Protocol

Open-source collective bulk-purchasing coordination protocol and reference implementation on the Stellar network.

---

> **Status: Foundation phase — core protocol mechanics are not yet implemented.**
>
> This repository contains the engineering foundation. Protocol implementation begins in Phase 2.

---

## The problem

Collective purchasing is powerful but difficult to coordinate. Groups of buyers who want to pool demand for bulk pricing have no reliable, trustless mechanism to:

- Aggregate commitments without risk to any individual participant
- Hold funds conditionally until a target is reached
- Automatically release funds to a supplier upon fulfillment, or return them if the campaign fails
- Do this without depending on a centralized intermediary to hold the money

Existing solutions rely on platforms that either hold custody of funds, require trust in an operator, or cannot provide verifiable guarantees to participants.

## What OTUA Protocol proposes

OTUA Protocol is designing an open protocol on the Stellar network where:

- Participants can commit to a collective purchase without transferring custody to an off-chain party
- Contributions are held on-chain until the campaign target is met or the deadline passes
- Settlement (payment to supplier) only occurs when fulfillment conditions are met
- Refunds are available on-chain if a campaign fails — no intermediary required

The protocol is for **collective purchasing of goods** — not investment, speculation, or profit pooling.

## Architecture overview

```
Web Application (apps/web)
        │
      REST
        │
   API (apps/api)
        │
   ┌────┴────┐
Indexer   Stellar / Soroban Contract
(read      (on-chain enforcement)
 model)
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) and [docs/architecture.md](./docs/architecture.md) for detail.

## Repository structure

```
otua-protocol/
├── apps/
│   ├── web/          — Next.js web application
│   └── api/          — NestJS API server
├── packages/
│   ├── sdk/          — Client SDK
│   ├── types/        — Shared TypeScript types
│   ├── validation/   — Shared validation logic
│   └── config/       — Shared configuration utilities
├── contracts/
│   └── group-buy-escrow/  — Future Soroban contract
├── indexer/          — Future event indexer
├── docs/             — Protocol, contract, API, and SDK documentation
├── scripts/          — Utility scripts
└── tests/            — Integration and E2E tests
```

## Development status

| Component              | Status                               |
| ---------------------- | ------------------------------------ |
| Monorepo foundation    | ✅ Complete                          |
| Web application        | 🏗 Foundation only (home page)       |
| API                    | 🏗 Foundation only (health endpoint) |
| SDK                    | 🏗 Skeleton only                     |
| Soroban contract       | 🏗 Skeleton only — no protocol logic |
| Indexer                | ⏳ Not yet started                   |
| Protocol specification | ⏳ Not yet written                   |
| Escrow mechanism       | ⏳ Undecided (see ADR-002)           |

## Getting started

See [DEVELOPERS.md](./DEVELOPERS.md) for full setup instructions.

```sh
git clone <repository-url>
cd otua-protocol
pnpm install
pnpm dev
```

Requires Node.js 24+ and pnpm 12+.

## Documentation

| Document                               | Description                          |
| -------------------------------------- | ------------------------------------ |
| [ARCHITECTURE.md](./ARCHITECTURE.md)   | System architecture                  |
| [PROTOCOL_SPEC.md](./PROTOCOL_SPEC.md) | Protocol specification (in progress) |
| [PRODUCT_SPEC.md](./PRODUCT_SPEC.md)   | Product and problem definition       |
| [ROADMAP.md](./ROADMAP.md)             | Development phases                   |
| [DEVELOPERS.md](./DEVELOPERS.md)       | Contributor setup guide              |
| [CONTRIBUTING.md](./CONTRIBUTING.md)   | How to contribute                    |
| [AI_AGENTS.md](./AI_AGENTS.md)         | Instructions for AI coding agents    |
| [SECURITY.md](./SECURITY.md)           | Security policy and reporting        |
| [docs/](./docs/)                       | Full documentation index             |

## Security

This protocol is designed to coordinate funds on a public blockchain. Security is a first-class concern at every layer.

- Do not report security vulnerabilities publicly. See [SECURITY.md](./SECURITY.md).
- Financial logic requires explicit review. See [AI_AGENTS.md](./AI_AGENTS.md).
- No code that handles funds may be merged without tests and security review.

## Roadmap

See [ROADMAP.md](./ROADMAP.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [DEVELOPERS.md](./DEVELOPERS.md).

## License

Apache-2.0. See [LICENSE](./LICENSE).

# @otua/sdk

OTUA Protocol client SDK — the primary library for applications interacting with the OTUA Protocol.

## Status

Foundation phase — intentionally a skeleton.

> **Important:** Protocol methods will only be added to this SDK after:
>
> 1. The [OTUA Protocol Specification](../../PROTOCOL_SPEC.md) has been formally completed and reviewed.
> 2. The on-chain contract interface has been finalized and deployed to Stellar testnet.
> 3. The API contract (`docs/api/`) has been formally specified.
>
> Stubbed protocol methods (e.g. `createCampaign()`, `contribute()`, `refund()`) must **not** be added speculatively. They create unreviewed assumptions about financial behavior and give consumers a false impression of readiness.

## Planned responsibilities

Once the protocol specification is complete, this SDK will provide:

- Typed wrappers around the OTUA API
- Stellar transaction construction helpers
- Protocol state queries
- Event subscription utilities

These responsibilities are listed here for future contributors — they are **not** yet implemented.

## Development

```sh
pnpm --filter @otua/sdk build
pnpm --filter @otua/sdk typecheck
pnpm --filter @otua/sdk test
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) and [DEVELOPERS.md](../../DEVELOPERS.md).

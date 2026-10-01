# SDK Quickstart

> **Status: Foundation phase — the SDK contains no protocol methods yet.**

The `@otua/sdk` package is the intended client library for applications that interact with the OTUA Protocol.

## Current state

At foundation phase, the SDK exports only its version constant. No protocol methods are available.

```ts
import { OTUA_SDK_VERSION } from '@otua/sdk';

console.log(OTUA_SDK_VERSION); // "0.1.0-foundation"
```

## When will protocol methods be available?

Protocol methods (campaign creation, contributions, queries, etc.) will be added to the SDK after:

1. The [OTUA Protocol Specification](../../PROTOCOL_SPEC.md) has been formally completed and reviewed.
2. The on-chain contract interface has been finalized and deployed to Stellar testnet.
3. The API contract (`docs/api/`) has been formally specified.

## Installation (future)

```sh
pnpm add @otua/sdk
```

## See also

- [examples.md](./examples.md)
- [packages/sdk/README.md](../../packages/sdk/README.md)

# @otua/types

Shared TypeScript type definitions for the OTUA Protocol monorepo.

## Status

Foundation phase — intentionally minimal.

Protocol-specific types (`Campaign`, `Contribution`, `Participant`, etc.) will only be added after the [OTUA Protocol Specification](../../PROTOCOL_SPEC.md) has been formally written and the on-chain contract interface has been finalized.

Do not add speculative domain types to satisfy placeholder code.

## Usage

```ts
import type { OtuaVersion } from '@otua/types';
```

## Development

```sh
pnpm --filter @otua/types build
pnpm --filter @otua/types typecheck
pnpm --filter @otua/types test
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) and [DEVELOPERS.md](../../DEVELOPERS.md).

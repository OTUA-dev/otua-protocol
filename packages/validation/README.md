# @otua/validation

Shared validation utilities for the OTUA Protocol.

## Status

Foundation phase — intentionally minimal.

Validation rules for protocol operations will only be added after the [OTUA Protocol Specification](../../PROTOCOL_SPEC.md) formally defines the invariants they must enforce.

**Design principle:** Financial invariants must never exist only in frontend code. All protocol validation logic belongs in this package, independently testable, and shared across the API and any other consumers.

## Development

```sh
pnpm --filter @otua/validation build
pnpm --filter @otua/validation typecheck
pnpm --filter @otua/validation test
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) and [DEVELOPERS.md](../../DEVELOPERS.md).

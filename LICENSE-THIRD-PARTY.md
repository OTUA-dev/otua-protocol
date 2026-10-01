# Third-Party Licenses

This document acknowledges third-party software used by the OTUA Protocol.

This file will be updated as dependencies are introduced and their license terms are verified.

## TypeScript / Node.js ecosystem

Dependencies and their licenses are tracked in `pnpm-lock.yaml`. Run `pnpm licenses list` to generate a full license report once the lockfile is generated.

Key runtime dependencies and their licenses:

| Package          | License    |
| ---------------- | ---------- |
| Next.js          | MIT        |
| React            | MIT        |
| NestJS           | MIT        |
| RxJS             | Apache-2.0 |
| reflect-metadata | Apache-2.0 |

## Rust / Cargo ecosystem

Rust dependency licenses are tracked in `Cargo.lock`. Run `cargo license` (with `cargo-license` installed) to generate a full report.

## License compatibility

The OTUA Protocol is licensed under Apache-2.0. Dependencies must be compatible with Apache-2.0 for inclusion in this project. If you add a dependency with a GPL, AGPL, or other potentially incompatible license, it must be reviewed before merge.

## Attribution

This file will be expanded with full attribution notices as required by the licenses of included dependencies.

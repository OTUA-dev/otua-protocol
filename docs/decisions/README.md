# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for the OTUA Protocol.

## What is an ADR?

An ADR documents a significant architectural decision: what was decided, why, what alternatives were considered, and what the consequences are.

ADRs are immutable after acceptance. If a decision changes, a new ADR is written that supersedes the previous one. The old ADR is updated to reference the new one.

## When is an ADR required?

An ADR is required for:

- Changes to the overall system architecture
- Selection of a framework, library, or platform
- Changes to the on-chain contract design
- Changes to the escrow or settlement mechanism
- Changes to the protocol state machine
- Any decision that is difficult to reverse

When in doubt, write an ADR.

## Status values

| Status                    | Meaning                                          |
| ------------------------- | ------------------------------------------------ |
| **Proposed**              | Under discussion, not yet accepted               |
| **Pending**               | Accepted in principle, details not yet finalized |
| **Accepted**              | Decision made and in effect                      |
| **Deprecated**            | Previously accepted but no longer current        |
| **Superseded by ADR-XXX** | Replaced by a later decision                     |

## Index

| ADR                                          | Title                              | Status   |
| -------------------------------------------- | ---------------------------------- | -------- |
| [ADR-001](./ADR-001-monorepo.md)             | TypeScript Monorepo Structure      | Accepted |
| [ADR-002](./ADR-002-escrow-model.md)         | Escrow Mechanism Selection         | Pending  |
| [ADR-003](./ADR-003-offchain-fulfillment.md) | Off-chain Fulfillment Verification | Proposed |

## Template

```markdown
# ADR-NNN: Title

## Status

[Proposed | Pending | Accepted | Deprecated | Superseded by ADR-NNN]

## Context

[What is the situation or problem that requires a decision?]

## Decision

[What has been decided?]

## Alternatives Considered

[What other options were evaluated?]

## Consequences

[What are the implications of this decision — positive and negative?]

## Security Considerations

[Are there security implications? How are they addressed?]

## Follow-up

[What actions or future decisions does this ADR require?]
```

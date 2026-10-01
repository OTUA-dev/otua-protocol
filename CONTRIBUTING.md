# Contributing to OTUA Protocol

Thank you for your interest in contributing. This document explains how to contribute effectively and what to expect from the process.

---

## Before you start

- Read [README.md](./README.md) to understand the project.
- Read [DEVELOPERS.md](./DEVELOPERS.md) to set up your environment.
- Read [AI_AGENTS.md](./AI_AGENTS.md) if you are using AI coding tools.
- Check the [open issues](https://github.com/otua-protocol/otua-protocol/issues) to see if your contribution is already being discussed.

---

## Contribution workflow

```
Issue
  │
  ▼
Discussion / specification
  │
  ▼
Implementation (on a branch)
  │
  ▼
Tests added or updated
  │
  ▼
pnpm check passes
  │
  ▼
Pull request opened
  │
  ▼
CI passes
  │
  ▼
Code review
  │
  ▼
Merge
  │
  ▼
Documentation updated (if needed)
```

**Every contribution begins with a GitHub issue.** Do not open a pull request without a corresponding issue unless it is a trivial documentation fix (typo, formatting).

---

## Issues

### Creating a good issue

- Use the appropriate issue template.
- Describe the problem or proposal clearly.
- For bug reports: include steps to reproduce, expected behavior, actual behavior, and environment details.
- For feature requests: explain the use case, not just the solution.
- For protocol/design proposals: reference the relevant specification sections.
- For security issues: **do not use the public issue tracker.** See [SECURITY.md](./SECURITY.md).

### Good first issues

Issues labeled `good first issue` are suitable for new contributors. They are scoped to foundation-phase work that does not require understanding the full protocol.

---

## Pull requests

### What makes a good PR

- Focused: one logical change per PR.
- Tested: all behavior changes have corresponding tests.
- Clean: `pnpm check` passes.
- Documented: the PR description explains what changed, why it changed, and how it was tested.
- Scoped: the PR implements what the linked issue specifies — not more.

### PR description

Use the PR template. Fill in all sections. Do not delete sections you consider irrelevant — write "N/A" instead.

### Size

Prefer smaller PRs. A PR that touches 5 files is reviewed better than one that touches 50. If your change is necessarily large, split it into a series of PRs with a clear dependency order.

---

## Protocol contributions

The OTUA Protocol specification ([PROTOCOL_SPEC.md](./PROTOCOL_SPEC.md)) defines what the smart contract enforces. Changes to the protocol require:

1. A GitHub issue describing the proposed change.
2. Discussion and consensus from core contributors.
3. An update to the specification document.
4. An ADR if the change affects system architecture.
5. Only then: implementation.

**Do not implement protocol behavior that is not in the specification.**

---

## Architecture contributions

Changes to the system architecture require an ADR. See [docs/decisions/README.md](./docs/decisions/README.md) for the ADR format and process.

---

## Code style

- TypeScript: strict mode. Follow the patterns in existing code.
- Rust: `rustfmt`. No `clippy` warnings.
- Formatting: Prettier handles TypeScript/JS. `rustfmt` handles Rust. Do not manually format — let the tools do it.
- Tests: colocated with source (`*.test.ts`). Descriptive test names.

---

## Review expectations

- Reviews focus on correctness, clarity, security, and adherence to the specification.
- Reviews are not personal. Feedback is about the code.
- Reviewers may request changes. Address them before requesting re-review.
- Financial logic and security-sensitive code receives additional scrutiny. This is expected and appropriate.

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## Questions?

See [SUPPORT.md](./SUPPORT.md) for where to ask questions.

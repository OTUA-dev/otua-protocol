# AI Agents — Repository Instructions

This document provides instructions for AI coding agents (GitHub Copilot, Cursor, Claude, GPT-4, etc.) operating in this repository.

**These rules apply to all AI agents, including autonomous coding agents, IDE assistants, and CI-integrated AI tools.**

---

## Foundational rule

> **AI agents may implement code, but they do not define OTUA protocol policy.**

Protocol decisions belong to human contributors through the specification and ADR process. If a required behavior is not documented in the specification, it must not be implemented.

---

## Before writing any code

1. **Read [README.md](./README.md).** Understand what the repository is and what phase it is in.
2. **Read [DEVELOPERS.md](./DEVELOPERS.md).** Understand how the repository is organized and how to run commands.
3. **Read [ARCHITECTURE.md](./ARCHITECTURE.md).** Understand the system boundaries.
4. **Read the specification relevant to your task.** If implementing protocol behavior, read [PROTOCOL_SPEC.md](./PROTOCOL_SPEC.md). If implementing contracts, read [docs/contracts/](./docs/contracts/).
5. **Read the linked GitHub issue.** Do not start work without an issue.
6. **Determine the exact scope of the issue.** Implement only what the issue specifies.

---

## Rules

### Scope

7. **Do not implement features not specified in the linked issue.**
8. **Do not invent protocol rules.** If a rule is not in the specification, it does not exist yet.
9. **Do not modify financial logic without explicit specification.** Financial logic includes contribution amounts, settlement calculations, refund amounts, and any arithmetic involving funds.
10. **Do not modify the protocol state machine without a corresponding update to [docs/protocol/state-machine.md](./docs/protocol/state-machine.md).**

### Architecture

11. **Do not change system architecture without an ADR.** Architecture changes require creating or updating a document in [docs/decisions/](./docs/decisions/). See [DEVELOPERS.md](./DEVELOPERS.md) for the ADR workflow.
12. **Do not introduce dependencies without justification.** Each new dependency must be explained in the PR description. Prefer existing workspace dependencies. Prefer well-maintained packages with explicit versions.

### Security

13. **Do not commit secrets.** This includes API keys, private keys, passwords, JWT secrets, and any credentials. Check your diff before submitting.
14. **Do not design for storage of personal information on-chain.** Names, addresses, contact details, national IDs, and other PII must not be written to Stellar contract storage.
15. **Do not weaken security checks or authorization guards** to make code compile or tests pass.

### Testing and quality

16. **Add or update tests when changing observable behavior.** A behavior change without a test is a gap that will become a regression.
17. **Run required validation before claiming completion:**
    ```sh
    pnpm check   # format:check + lint + typecheck + test
    cargo test   # if contract code was modified
    ```
18. **Do not weaken tests or lint rules to force a passing build.** If a test fails, fix the code. If a lint rule triggers, understand it before suppressing it.
19. **Do not suppress TypeScript errors with `// @ts-ignore` or `as unknown as T` casts** to paper over real type problems.

### APIs and interfaces

20. **Do not silently change public API signatures.** Any change to an exported function, type, or endpoint signature must be explicitly noted as a breaking change in the PR description.
21. **Do not silently change database schema semantics.** Schema migrations require explicit documentation of what changed and why.

### Pull requests

22. **Keep pull requests focused.** One PR = one logical change. Scope creep in PRs makes review harder and obscures accountability.
23. **Explain your assumptions.** If you made a decision not covered by the specification, document it in the PR description.
24. **Mark uncertain requirements as unresolved rather than guessing.** If the specification is ambiguous, surface the ambiguity in the PR or issue rather than silently implementing an interpretation.

### Integrity

25. **Treat AI-generated code as untrusted until reviewed by a human.** AI agents can introduce subtle bugs, especially in financial arithmetic and authorization logic. AI-generated code is not exempt from review because it came from a well-known model.
26. **Never close an issue without satisfying its acceptance criteria.** If acceptance criteria are not stated in the issue, ask for them before claiming completion.
27. **Never claim a feature is complete when it is only stubbed.** A stub is a stub. It must be labeled as such.
28. **Prefer small, reviewable changes.** A PR of 50 lines is reviewed thoroughly. A PR of 2000 lines is approved nervously.

---

## Particularly high-risk areas

Extra care is required in these areas. If in doubt, stop and ask.

- Any code in `contracts/` — on-chain logic is irreversible once deployed
- Any arithmetic involving contribution amounts, settlement totals, or refund calculations
- Any changes to authorization checks or role management
- Any change that affects the refund path (must never be blocked by a missing external party)
- Any change to how environment variables are loaded (risk of secret exposure)
- Any new dependency added to the repository

---

## What the current phase allows

**Phase 1 (Foundation):** No protocol business logic. No financial flows. No Stellar integration. Infrastructure only.

Do not implement protocol logic in Phase 1, even if it seems straightforward. Protocol logic requires a reviewed specification first.

If you believe you have found a genuine good-first-issue opportunity that is in scope for foundation phase, open a GitHub issue and discuss it before implementing.

---

## Reference documents

| Document                               | When to read it                       |
| -------------------------------------- | ------------------------------------- |
| [README.md](./README.md)               | Always, first                         |
| [DEVELOPERS.md](./DEVELOPERS.md)       | Always, before writing code           |
| [ARCHITECTURE.md](./ARCHITECTURE.md)   | When touching system structure        |
| [PROTOCOL_SPEC.md](./PROTOCOL_SPEC.md) | When implementing protocol behavior   |
| [docs/contracts/](./docs/contracts/)   | When working on contract code         |
| [docs/decisions/](./docs/decisions/)   | When an architectural question arises |
| [SECURITY.md](./SECURITY.md)           | When touching security-sensitive code |

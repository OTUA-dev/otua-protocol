# Security Policy

## Reporting a vulnerability

**Do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in this project, please report it privately. Public disclosure before a fix is available puts users at risk.

### How to report

Email: **[security contact not yet configured — see note below]**

> **Note:** A dedicated security contact address has not yet been configured for this project. Until it is, please open a GitHub Security Advisory via the repository's **Security** tab → **Advisories** → **Report a vulnerability**. This keeps the report private.

### What to include in your report

- Description of the vulnerability
- Steps to reproduce
- Affected component(s): contract, API, SDK, web application
- Potential impact (what an attacker could do)
- Whether you believe the vulnerability is currently being exploited
- Any suggested mitigations (optional)

### What to expect

- Acknowledgment of receipt within 72 hours.
- An assessment of severity and impact.
- Updates on remediation progress.
- Credit in the security advisory when the fix is published (if desired).

---

## Scope

### In scope

- Smart contract vulnerabilities (escrow logic, settlement, refunds, authorization)
- API authentication or authorization bypasses
- SDK code that could cause incorrect transaction construction
- Dependency vulnerabilities with known exploits affecting this project
- Secret exposure (credentials, private keys in code or configuration)

### Out of scope

- Theoretical vulnerabilities without a realistic attack scenario
- Social engineering
- Physical access attacks
- Denial of service attacks that do not result in fund loss
- Issues in third-party services not under this project's control

---

## Secrets policy

- **Never commit secrets.** Private keys, JWT secrets, API credentials, database passwords, and similar values must never be committed to this repository.
- `.env` files are gitignored. `.env.example` files contain only documentation, never real values.
- If a secret is accidentally committed, assume it is compromised. Rotate it immediately, then address the repository history.

---

## Smart contract security

The OTUA Protocol contract handles real financial value. As such:

- All contract code changes require explicit security review before merge.
- Tests for financial invariants (balance accounting, authorization, refund correctness) are mandatory.
- The contract must be independently audited before any mainnet deployment.
- Known attack classes (reentrancy, integer overflow, authorization bypass, front-running) must be explicitly analyzed for each version.

**No contract that holds real funds should be deployed without a completed audit.**

---

## Financial logic review

Any code that implements:

- Contribution amount calculations
- Settlement totals
- Refund calculations
- Asset transfers

requires:

- Explicit tests covering the calculation
- Review by at least one additional contributor who has read the protocol specification
- A note in the PR description under "Security Considerations"

---

## Dependency security

- All dependencies are pinned to exact versions.
- `pnpm audit` is run in CI.
- `cargo audit` is run in CI (when the contract has dependencies).
- Dependency updates should be reviewed, not applied blindly.

---

## Disclosure policy

We follow **coordinated disclosure**:

1. Reporter notifies us privately.
2. We assess and develop a fix.
3. We notify the reporter of the fix timeline.
4. Fix is released.
5. Security advisory is published.

We aim to release fixes for critical vulnerabilities within 7 days of a confirmed report. For complex vulnerabilities, we will communicate the timeline.

# Contract Security Model

> **Status: Not yet designed**
>
> This document will be completed when the contract is designed. The principles below apply to all future contract work.

## Principles

1. **The contract is the trust boundary.** Application layer code must not be trusted to enforce financial invariants.
2. **Minimize privileged roles.** Every privileged role is an attack surface. Design for the minimum set of privileges required.
3. **Fail safe.** When in doubt, the contract should revert rather than proceed in an undefined state.
4. **No personal data on-chain.** Do not store names, addresses, contact information, or other PII in contract storage.
5. **Overflow safety.** All arithmetic must be overflow-safe. Use checked arithmetic.
6. **Reentrancy.** If the contract makes external calls, reentrancy must be analyzed.
7. **Audit before mainnet.** Any version of this contract that holds real funds must be independently audited.

## Threat model

See [docs/security/threat-model.md](../security/threat-model.md) for the broader threat model.

Contract-specific threats will be documented here when the contract is designed.

## Security review requirements

- All contract code changes require an explicit security review before merge.
- Tests for security-sensitive invariants (balance accounting, authorization checks) are mandatory.
- Changes to settlement or refund logic require review by at least two contributors.

## See also

- [docs/security/threat-model.md](../security/threat-model.md)
- [SECURITY.md](../../SECURITY.md)

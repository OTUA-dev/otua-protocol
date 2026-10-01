# Contract Authorization

> **Status: Not yet designed**
>
> The authorization model depends on the contract interface design.

## Principles

- Every state-mutating function must define who is authorized to call it.
- Authorization must be enforced on-chain, not assumed from the application layer.
- The contract must not trust caller-provided identity claims without verification.
- Privilege escalation must be impossible.

## Anticipated authorization roles (illustrative)

| Role             | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Campaign creator | The address that created the campaign. May have limited admin rights. |
| Participant      | Any address that has made a contribution to a campaign.               |
| Supplier         | The address designated to receive settlement funds.                   |
| Protocol admin   | If a privileged role exists, it must be minimized and documented.     |

Whether a protocol admin role exists at all is an open design question. Privilege concentration creates risk.

## See also

- [architecture.md](./architecture.md)
- [security-model.md](./security-model.md)

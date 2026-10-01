# Contract Storage

> **Status: Not yet designed**
>
> Storage design depends on the escrow mechanism and contract interface decisions.

## Principles (to be applied when storage is designed)

- Store only what is required for on-chain enforcement.
- Do not store personal information on-chain.
- Minimize storage footprint (Soroban storage has associated costs).
- Use explicit storage key namespacing to avoid collisions.
- Document every storage entry: key type, value type, lifecycle (when created, when deleted).

## Anticipated storage entries (illustrative, not final)

| Key                                      | Value           | Description                              |
| ---------------------------------------- | --------------- | ---------------------------------------- |
| `Campaign(campaign_id)`                  | `CampaignState` | Campaign configuration and current state |
| `Contribution(campaign_id, participant)` | `Amount`        | Participant's committed contribution     |
| `TotalContributions(campaign_id)`        | `Amount`        | Running total for target check           |

These are illustrative only. The actual storage design will be defined when the contract is implemented.

## See also

- [architecture.md](./architecture.md)
- [ADR-002](../decisions/ADR-002-escrow-model.md)

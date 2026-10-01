# Security Assumptions

Explicit documentation of the trust assumptions the OTUA Protocol makes at each layer.

Undocumented trust assumptions are security vulnerabilities. Every assumption listed here is a future audit target.

---

## On-chain assumptions

| #   | Assumption                                                                       | Risk if violated                                 |
| --- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| A1  | The Stellar network correctly executes contract code.                            | Fundamental — entire protocol depends on this.   |
| A2  | Soroban/Stellar primitives are secure against known attack classes.              | Must be revisited when the contract is designed. |
| A3  | Contract storage is not readable/writable except through the contract interface. | Data integrity assumption.                       |

---

## Off-chain assumptions

| #   | Assumption                                                                   | Risk if violated                                                                     |
| --- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| B1  | The API server is not the source of truth for financial state.               | If violated, the API becomes a single point of failure for funds.                    |
| B2  | The indexer's read model may be stale or temporarily inconsistent.           | UI may show incorrect state. Must not affect on-chain outcomes.                      |
| B3  | Fulfillment confirmation is initially provided by a trusted off-chain party. | If the trusted party is compromised, fraudulent settlement could occur. See ADR-003. |
| B4  | The supplier is identified and verified off-chain.                           | Fraudulent suppliers may register campaigns. Mitigation strategy is TBD.             |

---

## Application layer assumptions

| #   | Assumption                                                    | Risk if violated                                                                       |
| --- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| C1  | Application layer code does not enforce financial invariants. | Assumed benign — all enforcement is on-chain.                                          |
| C2  | API endpoints are authenticated and authorized.               | If violated, unauthorized users could submit transactions. (Auth not yet implemented.) |
| C3  | No PII is submitted to the chain.                             | Privacy violation if violated.                                                         |

---

## Explicit non-assumptions

These things are explicitly NOT assumed:

- The API server is always online (on-chain state is independent of the API).
- The indexer is real-time (it may lag behind chain state).
- The web application is the only way to interact with the protocol (direct contract interaction is always possible).

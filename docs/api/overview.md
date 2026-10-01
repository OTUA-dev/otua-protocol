# API Overview

> **Status: Foundation phase — only the health endpoint is implemented.**

## Base URL

```
http://localhost:3001   (local development)
```

Production and testnet URLs will be documented when environments are provisioned.

## Authentication

Authentication is not yet implemented. It will be added in a future phase.

## Versioning

The API will be versioned (e.g. `/v1/`) when the first stable endpoints are introduced.

## Available endpoints

### Foundation phase

| Method | Path      | Description               |
| ------ | --------- | ------------------------- |
| `GET`  | `/health` | Returns API health status |

### Planned (not yet implemented)

The following endpoint groups are planned. They will be specified and implemented after the protocol specification is complete.

| Group               | Description                         |
| ------------------- | ----------------------------------- |
| `/v1/campaigns`     | Campaign creation and management    |
| `/v1/contributions` | Participant contribution operations |
| `/v1/participants`  | Participant profiles                |
| `/v1/suppliers`     | Supplier management                 |
| `/v1/fulfillment`   | Fulfillment reporting               |
| `/v1/stellar`       | Stellar transaction helpers         |

Do not implement endpoints not backed by a protocol specification.

## See also

- [endpoints.md](./endpoints.md)
- [ARCHITECTURE.md](../../ARCHITECTURE.md)

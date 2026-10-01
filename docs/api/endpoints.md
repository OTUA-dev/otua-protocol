# API Endpoints

> **Status: Foundation phase — only the health endpoint exists.**

## GET /health

Returns the API operational status.

**Authentication:** None required.

**Response: 200 OK**

```json
{
  "status": "ok",
  "version": "0.1.0-foundation",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

**Fields:**

| Field       | Type                            | Description        |
| ----------- | ------------------------------- | ------------------ |
| `status`    | `"ok" \| "degraded" \| "error"` | Operational status |
| `version`   | `string`                        | API version string |
| `timestamp` | ISO 8601 string                 | Time of response   |

---

Additional endpoints will be documented here as they are specified and implemented.

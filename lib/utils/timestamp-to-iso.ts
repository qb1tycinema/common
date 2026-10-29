import type { Timestamp } from "@qb1tycinema/contracts/gen/google/protobuf/timestamp";

export function timestampToISO(timestamp: Timestamp): string | null {
    return new Date(timestamp.seconds * 1000 + timestamp.nanos / 1_000_000).toISOString()
}
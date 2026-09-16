import { PROTO_PATHS } from "@qb1tycinema/contracts"

import type { GrpcRegistryOptions } from "@/lib/grpc/interfaces"

export const GRPC_CLIENTS: Record<string, GrpcRegistryOptions> = {
	AUTH_PACKAGE: {
		package: "auth.v1",
		protoPath: PROTO_PATHS.AUTH,
		url: "AUTH_GRPC_URL"
	},
	ACCOUNT_PACKAGE: {
		package: "account.v1",
		protoPath: PROTO_PATHS.ACCOUNT,
		url: "ACCOUNT_GRPC_URL"
	},
	USERS_PACKAGE: {
		package: "users.v1",
		protoPath: PROTO_PATHS.USERS,
		url: "USERS_GRPC_URL"
	}
} as const

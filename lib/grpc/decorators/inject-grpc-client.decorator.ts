import { Inject } from "@nestjs/common"

import { GRPC_CLIENT_PREFIX } from "../constants"

export const InjectGrpcClient = (token: string) =>
	Inject(`${GRPC_CLIENT_PREFIX}_${token}`)

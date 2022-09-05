import {
    AuthenticationResultType,
    GetUserCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider'

export type AuthPayload =
    | (AuthenticationResultType & Partial<{ User: GetUserCommandOutput }>)
    | undefined

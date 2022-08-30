import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    GetUserCommand,
} from '@aws-sdk/client-cognito-identity-provider'
import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import { AuthPayload } from '../../modules/auth/authPayload'

const { publicRuntimeConfig } = getConfig()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).send({})

    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: publicRuntimeConfig.cognitoClientId,
        UserPoolId: publicRuntimeConfig.cognitoUserPoolId,
        AuthParameters: {
            USERNAME: req.body.username,
            PASSWORD: req.body.password,
        },
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: publicRuntimeConfig.cognitoRegion,
    })
    const initiateAuthCommand = new InitiateAuthCommand(params)

    try {
        const response = await cognitoClient.send(initiateAuthCommand)
        const payload: AuthPayload = response.AuthenticationResult
        if (response.$metadata.httpStatusCode === 200 && payload) {
            const userCmd = new GetUserCommand({
                AccessToken: response.AuthenticationResult?.AccessToken,
            })
            const user = await cognitoClient.send(userCmd)
            payload.User = user
        }
        return res.status(response.$metadata.httpStatusCode!).json({
            ...payload,
        })
    } catch (err: unknown) {
        return res.status(500).json({ message: err })
    }
}

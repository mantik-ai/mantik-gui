import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    GetUserCommand,
} from '@aws-sdk/client-cognito-identity-provider'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthPayload } from '../../modules/auth/authPayload'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).send({})

    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.COGNITO_CLIENT_ID,
        UserPoolId: process.env.COGNITO_USERPOOL_ID,
        AuthParameters: {
            USERNAME: req.body.username as string,
            PASSWORD: req.body.password as string,
        },
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: process.env.COGNITO_REGION,
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
        console.log(err)
        return res.status(500).json({ message: err })
    }
}

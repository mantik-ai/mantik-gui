import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
} from '@aws-sdk/client-cognito-identity-provider'
import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

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
        console.log(response)
        return res.status(response.$metadata.httpStatusCode!).json({
            ...response.AuthenticationResult,
        })
    } catch (err: unknown) {
        console.log(err)
        return res.status(500).json({ message: err })
    }
}

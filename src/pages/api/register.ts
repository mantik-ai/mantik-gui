import {
    CognitoIdentityProviderClient,
    SignUpCommand,
    SignUpCommandInput,
} from '@aws-sdk/client-cognito-identity-provider'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).send({})
    if (!req.body.email) {
        return res.status(400).send({})
    }

    const params: SignUpCommandInput = {
        ClientId: process.env.COGNITO_CLIENT_ID,
        Username: req.body.username as string,
        Password: req.body.password as string,
        UserAttributes: [{ Name: 'email', Value: req.body.email }],
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: process.env.COGNITO_REGION,
    })
    const signUpCommand = new SignUpCommand(params)

    try {
        const response = await cognitoClient.send(signUpCommand)
        return res.status(response.$metadata.httpStatusCode!).json({
            ...response,
        })
    } catch (err: unknown) {
        return res.status(500).json({ message: err })
    }
}

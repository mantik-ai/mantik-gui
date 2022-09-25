import {
    CognitoIdentityProviderClient,
    ConfirmSignUpCommand,
    ConfirmSignUpCommandInput,
} from '@aws-sdk/client-cognito-identity-provider'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).send({})

    const params: ConfirmSignUpCommandInput = {
        ClientId: process.env.COGNITO_CLIENT_ID,
        Username: req.body.username as string,
        ConfirmationCode: req.body.code as string,
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: process.env.COGNITO_REGION,
    })
    const signUpCommand = new ConfirmSignUpCommand(params)

    try {
        const response = await cognitoClient.send(signUpCommand)
        return res.status(response.$metadata.httpStatusCode!).json({
            ...response,
        })
    } catch (err: unknown) {
        return res.status(500).json({ message: err })
    }
}

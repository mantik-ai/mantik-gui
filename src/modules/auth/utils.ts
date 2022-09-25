export const getSignUpExceptionMessage = (msg: string) => {
    switch (msg) {
        case 'CodeDeliveryFailureException':
            return 'code delivery failure'
        case 'ForbiddenException':
            return 'forbidden'
        case 'InternalErrorException':
            return 'internal error'
        case 'InvalidEmailRoleAccessPolicyException':
            return 'invalid email role access policy'
        case 'InvalidLambdaResponseException':
            return 'invalid lambda response'
        case 'InvalidParameterException':
            return 'invalid parameter'
        case 'InvalidPasswordException':
            return 'invalid password'
        case 'InvalidSmsRoleAccessPolicyException':
            return 'invalid sms role access policy'
        case 'InvalidSmsRoleTrustRelationshipException':
            return 'invalid sms role trust relationship'
        case 'NotAuthorizedException':
            return 'not authorized'
        case 'ResourceNotFoundException':
            return 'resource not found'
        case 'TooManyRequestsException':
            return 'too many requests'
        case 'UnexpectedLambdaException':
            return 'unexpected lambda'
        case 'UserLambdaValidationException':
            return 'user lambda validation'
        case 'UsernameExistsException':
            return 'username exists'
        default:
            return 'An unknown error occurred'
    }
}

export const getConfirmExceptionMessage = (msg: string) => {
    switch (msg) {
        case 'AliasExistsException':
            return 'your email is already in use'
        case 'CodeMismatchException':
            return 'code mismatch'
        case 'ExpiredCodeException':
            return 'expired code'
        case 'ForbiddenException':
            return 'forbidden'
        case 'InternalErrorException':
            return 'internal error'
        case 'InvalidLambdaResponseException':
            return 'invalid lambda response'
        case 'InvalidParameterException':
            return 'invalid parameter'
        case 'LimitExceededException':
            return 'limit exceeded'
        case 'NotAuthorizedException':
            return 'not authorized'
        case 'ResourceNotFoundException':
            return 'resource not found'
        case 'TooManyFailedAttemptsException':
            return 'too many failed attempts'
        case 'TooManyRequests':
            return 'too many requests'
        case 'UnexpectedLambdaException':
            return 'unexpected lambda'
        case 'UserLambdaValidationException':
            return 'user lambda validation'
        case 'UserNotFoundException':
            return 'user not found'
        default:
            return 'An unknown error occurred'
    }
}

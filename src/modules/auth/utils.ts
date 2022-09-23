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
            return 'alias exists'
        case 'CodeMismatchException':
            return 'code mismatch'
        case 'ExpiredCodeException':
            return 'expired code exception'
        case 'ForbiddenException':
            return 'forbidden exception'
        case 'InternalErrorException':
            return 'internal error exception'
        case 'InvalidLambdaResponseException':
            return 'invalid lambda response exception'
        case 'InvalidParameterException':
            return 'invalid parameter exception'
        case 'LimitExceededException':
            return 'limit exceeded exception'
        case 'NotAuthorizedException':
            return 'not authorized exception'
        case 'ResourceNotFoundException':
            return 'resource not found exception'
        case 'TooManyFailedAttemptsException':
            return 'too many failed attempts exception'
        case 'TooManyRequests':
            return 'too many requests'
        case 'UnexpectedLambdaException':
            return 'unexpected lambda exception'
        case 'UserLambdaValidationException':
            return 'user lambda validation exception'
        case 'UserNotFoundException':
            return 'user not found exception'
        default:
            return 'An unknown error occurred'
    }
}

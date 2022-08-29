export const assertEnv = (value: unknown) => {
    if (typeof value === 'string') {
        return value
    }

    throw Error(`env variable is not defined`)
}

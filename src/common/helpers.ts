export const assertEnv = (value: unknown) => {
    if (typeof value === 'string') {
        return value
    }

    throw Error(`env variable ${value} is not defined`)
}

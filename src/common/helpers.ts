export const assertEnv = (value: unknown) => {
    if (typeof value === 'string') {
        return value
    }
    console.log(value)

    throw Error(`env variable is not defined`)
}

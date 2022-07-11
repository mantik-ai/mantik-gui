/**
 * Generated by @openapi-codegen
 *
 * @version 0.1.0
 */
/**
 * an error message
 *
 * @maxLength 1024
 */
export type ErrorMessage = string

export type Settings = {
    name?: string
    password?: string
    token?: string
    address?: string
    userId?: number
    bankInfo?: string
    connections?: Connection[]
}

export type Project = {
    owner?: string
    members?: void[]
    groups?: string[]
    git?: void[]
    experiment?: Experiment[]
    data?: void[]
}

export type Connection = {
    connectionId?: number
    connectionName?: string
    connectionProvider?: string
    loginName?: string
    password?: string
    token?: string
    authMethod?: string
}

export type Experiment = {
    experiment_id?: string
    name?: string
    artifact_location?: string
    lifecycle_stage?: string
    last_update_time?: number
    creation_time?: number
    tags?: void[]
}

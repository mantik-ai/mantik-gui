/**
 * Generated by orval v6.9.2 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { User } from './user'
import type { UserGroup } from './userGroup'

/**
 * Represents an organization, i.e. a collection of user groups and users
 */
export interface Organization {
    organizationId: string
    name: string
    contact: User
    groups?: UserGroup[]
    members?: User[]
}

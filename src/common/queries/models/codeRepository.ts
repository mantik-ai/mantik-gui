/**
 * Generated by orval v6.9.2 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { Label } from './label'

/**
 * Represents a code repository, usually (but not exclusively) one of github, gitlab, bitbucket
 */
export interface CodeRepository {
    codeRepositoryId: string
    codeRepositoryName?: string
    uri: string
    description?: string
    labels?: Label[]
}

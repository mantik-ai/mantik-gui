/**
 * Generated by orval v6.9.2 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { CodeRepository } from './codeRepository'
import type { Label } from './label'

/**
 * Represents an untrained model definition
 */
export interface ModelRepository {
    modelRepositoryId: string
    uri?: string
    description?: string
    git?: CodeRepository
    commit?: string
    labels?: Label[]
}

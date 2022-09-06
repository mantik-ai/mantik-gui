/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { CodeRepository } from './codeRepository'
import type { RunsByCodeRepositoryUsageItem } from './runsByCodeRepositoryUsageItem'

/**
 * Runs grouped by codeRepository used
 */
export interface RunsByCodeRepository {
    codeRepository?: CodeRepository
    usage?: RunsByCodeRepositoryUsageItem[]
}

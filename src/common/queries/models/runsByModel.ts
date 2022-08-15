/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { ModelRepository } from './modelRepository'
import type { RunsByModelUsageItem } from './runsByModelUsageItem'

/**
 * Runs grouped by model used
 */
export interface RunsByModel {
    modelRepository?: ModelRepository
    usage?: RunsByModelUsageItem[]
}

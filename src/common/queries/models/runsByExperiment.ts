/**
 * Generated by orval v6.8.1 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { ExperimentRepository } from './experimentRepository'
import type { RunsByExperimentUsageItem } from './runsByExperimentUsageItem'

/**
 * Runs grouped by expiment used
 */
export interface RunsByExperiment {
    experimentRepository?: ExperimentRepository
    usage?: RunsByExperimentUsageItem[]
}
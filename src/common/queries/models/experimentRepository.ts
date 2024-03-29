/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Mantik minimal API
 * The API serves the front end with all necessary information on projects, and users.
 * OpenAPI spec version: 0.1.0
 */
import type { Label } from './label'

/**
 * Represents an mlflow experiment, see also [mlflow API specification](https://www.mlflow.org/docs/latest/rest-api.html#mlflowexperiment)
 */
export interface ExperimentRepository {
    experimentId: string
    name?: string
    artifact_location?: string
    lifecycle_stage?: string
    last_update_time?: number
    creation_time?: number
    labels?: Label[]
}

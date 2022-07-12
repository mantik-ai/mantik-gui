import { setupWorker } from 'msw'
import { getDefaultMSW } from '../queries/default/default.msw'

export const worker = setupWorker(...getDefaultMSW())

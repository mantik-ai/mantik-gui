import { setupServer } from 'msw/node'
import { getDefaultMSW } from '../queries/default/default.msw'

export const server = setupServer(...getDefaultMSW())

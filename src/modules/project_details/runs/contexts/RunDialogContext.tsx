import { createContext, Dispatch, SetStateAction, useState } from 'react'
import {
    Connection,
    DataRepository,
    ExperimentRepository,
    ModelRepository,
    Run,
} from '../../../../common/queries'

export interface RunDialogParameters {
    run?: Run
    setRun: Dispatch<SetStateAction<Run | undefined>>
    setExperiment: (x: ExperimentRepository) => void
    setData: (x: DataRepository) => void
    setModel: (x: ModelRepository) => void
    setConnection: (x: Connection) => void
    clearRun: () => void
}
const RunDialogContext = createContext<Partial<RunDialogParameters>>({})

interface RunDialogProviderProps {
    children: React.ReactNode
}
export const RunDialogProvider: React.FC<RunDialogProviderProps> = (props) => {
    const [run, setRun] = useState<Run | undefined>()
    const clearRun = () => {
        setRun(undefined)
    }
    const setExperiment = (x: ExperimentRepository) => {
        if (run) {
            run.experimentRepository = x
            setRun(run)
        }
    }
    const setData = (x: DataRepository) => {
        if (run) {
            run.dataRepository = x
            setRun(run)
        }
    }
    const setModel = (x: ModelRepository) => {
        if (run) {
            run.modelRepository = x
            setRun(run)
        }
    }
    const setConnection = (x: Connection) => {
        if (run) {
            run.connections = x
            setRun(run)
        }
    }

    return (
        <RunDialogContext.Provider
            value={{
                run,
                setRun,
                setExperiment,
                setModel,
                setConnection,
                setData,
                clearRun,
            }}
        >
            {props.children}
        </RunDialogContext.Provider>
    )
}

export default RunDialogContext

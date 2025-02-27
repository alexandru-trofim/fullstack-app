import { TrpcProvider } from './libs/trpcProvider'
import { AllIdeasPage } from './pages/AllIdeasPage'

export const App = () => {
    return (
        <TrpcProvider>
            <AllIdeasPage />
        </TrpcProvider>
    )
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import TrackBar from './UI/components/trackBar/trackBar.jsx'
import store from './redux/store/reduxStore.jsx'
import AppRoutes from './routes.jsx'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        gcTime: 24 * 60 * 60 * 1000,
      },
      mutations: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes />
        <TrackBar />
      </Provider>
    </QueryClientProvider>
  )
}
export default App

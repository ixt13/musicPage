import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contextProviders/ThemeProvider.jsx'
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
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App

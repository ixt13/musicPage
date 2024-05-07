import AppRoutes from './routes.jsx'
import { ThemeProvider } from './UI/components/ThemeProvider/ThemeProvider'
function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}
export default App

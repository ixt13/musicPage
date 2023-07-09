import AppRoutes from './routes.jsx'
import { ThemeProvider } from './components/screens/ThemeProvider/ThemeProvider.jsx'
function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}
export default App

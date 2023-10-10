import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function MyComponent() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const myParam = searchParams.get('myParam') // Здесь 'myParam' - это имя вашего параметра

  useEffect(() => {
    // Делайте что-то с myParam, например, сохраните его в состояние или выполните нужные действия
    console.log('Значение myParam:', myParam)
  }, [myParam])

  // Остальной код вашего компонента
}

export default MyComponent

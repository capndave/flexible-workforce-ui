import { useWindowSize } from './hooks'
import './App.css'

function App() {
  const windowSize = useWindowSize()

  return (windowSize.width < 900) ? <div>narrow</div> : <div>wide</div>
}

export default App

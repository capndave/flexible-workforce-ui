import { useWindowSize } from './hooks'
import DesktopLandingPage from './DesktopLandingPage'
import MobileLandingPage from './MobileLandingPage'
import './App.css'

function App() {
  const windowSize = useWindowSize()

  return (windowSize.width < 900) ? <MobileLandingPage /> : <DesktopLandingPage />
}

export default App

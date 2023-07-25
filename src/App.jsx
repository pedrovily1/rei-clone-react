import { useState } from 'react'
import { Provider } from './context/Context'
import Header from './components/header/Header'
import PromoBar from './components/promo/PromoBar'

function App() {

  const [state, setState] = useState("The beginning of something new");

  return (
    <div>
      <Header />
      <PromoBar />
    </div>
  )
}

export default App

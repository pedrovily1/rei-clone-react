import { useState } from 'react'
import { Provider } from './context/Context'
import Header from './components/header/Header'


function App() {

  const [state, setState] = useState("The beginning of something new");

  return (
    <div>
      <Header />
    </div>
  )
}

export default App

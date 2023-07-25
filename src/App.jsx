import { useState } from 'react'
import { Provider } from './context/Context'
import Test from './components/Test';
import Header from './components/Header'


function App() {

  const [state, setState] = useState("The beginning of something new");

  return (
    <div>
      <Test />
      <Header />
    </div>
  )
}

export default App

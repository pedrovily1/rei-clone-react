import { useState } from 'react'
import { Provider } from './context/Context'
import Test from './components/Test';



function App() {

  const [state, setState] = useState("The beginning of something new");

  return (
    <div>
      <Test />
    </div>
  )
}

export default App

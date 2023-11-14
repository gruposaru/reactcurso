import { useState } from 'react'


import './App.css'
import ItemContainer from './Components/ItemListContainer/ItemContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     
      <div className="App">
      <NavBar></NavBar>
        <ItemContainer greetting="Bienvenido a mi tienda en linea "></ItemContainer>
      </div>

    </>
  )
}

export default App

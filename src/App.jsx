import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import MeusLegos from './pages/MeusLegos'
import Albergue from './Pages/Albergue'

function App() {
  const [pagina, setPagina] = useState(<Home />)
  return (
    <>
    <nav>
      <button onClick={ () => setPagina(<Home />)}>Home</button>
      <button onClick={ () => setPagina(<Contato />)}>Contato</button>
      <button onClick={ () => setPagina(<MeusLegos />)}>MeusLegos</button>
      <button onClick={ () => setPagina(<Albergue />)}>Albergue</button>
    </nav>
     {pagina}
    </>
  )
}

export default App

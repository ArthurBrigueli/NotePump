
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotePump from './pages/NotePump/NotePump';
import MinhaLista from './pages/MinhaLista/MinhaLista';

function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/NotePump' exact Component={NotePump}/>
            <Route path='/MinhaLista' Component={MinhaLista}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

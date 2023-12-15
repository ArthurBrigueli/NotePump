
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import NotePump from './pages/NotePump/NotePump';
import MinhaLista from './pages/MinhaLista/MinhaLista';
import Login from './pages/Login/Login';

function App() {


  const isLocationNavBar = location.pathname !== '/login'

  return (
    <>
      <Router>
        <div>
          {isLocationNavBar && <NavBar/>}
          
          <Routes>
            <Route path='/NotePump' exact Component={NotePump}/>
            <Route path='/MinhaLista' Component={MinhaLista}/>
            <Route path='/login' Component={Login}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

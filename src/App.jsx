
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import NotePump from './pages/NotePump/NotePump';
import MinhaLista from './pages/MinhaLista/MinhaLista';
import Login from './pages/Login/Login';

function App() {

  const isLocationNavBar = location.pathname !== '/login';

  return (
    <>
      <Router key={location.pathname}>
        <div>
          {isLocationNavBar && <NavBar />}
          
          <Routes>
            <Route path="/NotePump" element={<NotePump />} />
            <Route path="/MinhaLista" element={<MinhaLista />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

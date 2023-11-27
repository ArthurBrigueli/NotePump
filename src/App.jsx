
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotePump from './pages/NotePump/NotePump';


function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/NotePump' exact Component={NotePump}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

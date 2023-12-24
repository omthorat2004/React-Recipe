import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Create from './Pages/Create/Create'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Recipe from './Pages/recipe/Recipe'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/recipe/:id' element={<Recipe/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

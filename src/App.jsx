import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import About from './pages/About'
import Books from './pages/Books'
import Footer from './components/Footer'
function App(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
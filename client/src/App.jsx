import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <BrowserRouter>
    <main className="overflow-hidden">
     <Header />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/dashboard' element={<Dashboard />} />
      </Routes>  
     <Footer />
    </main>
    </BrowserRouter>
    
  )
}

export default App
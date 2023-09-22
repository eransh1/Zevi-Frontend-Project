
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
// import Dummy from "./components/Dummy/Dummy"

const App = () => {

  
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      {/* <Route path='/dummy' element={<Dummy/>}></Route> */}

    </Routes>
   </>
  )
}

export default App
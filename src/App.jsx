import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Product from "./pages/Product"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='product' element={<Product />} />
      <Route path='login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

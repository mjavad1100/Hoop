import './App.css'
import {Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckOut from "./Pages/CheckOut"
import PageNotFound from "./Pages/404"
import ProductsProvider from "./Context/ProductContext"
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { Container } from "react-bootstrap"
import Headertop from "./Pages/Headertop"
function App() {

  return (
    <ProductsProvider>
      <Headertop/>
    <Routes>
      <Route index element={<Navigate to="/Products" replace/>} />
    <Route path="/Products" element={<ProductsPage/>}/>
    <Route path="/Products/:id" element={<DetailsPage/>}/>
    <Route path="/CheckOut" element={<CheckOut/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </ProductsProvider>
  )
}

export default App

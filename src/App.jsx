import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import CheckOut from "./Pages/CheckOut"
import PageNotFound from "./Pages/404"
import ProductsProvider from "./Context/ProductContext"



import Headertop from "./Pages/Headertop"
import CartProvider from './Context/CartContext'
function App() {

  return (
    <ProductsProvider>
      <Headertop />
      <CartProvider>
      <Routes>
        <Route index element={<Navigate to="/Products" replace />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Products/:id" element={<DetailsPage />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </CartProvider>
    </ProductsProvider>
  )
}

export default App

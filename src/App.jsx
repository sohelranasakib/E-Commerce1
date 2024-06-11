import Rootlayout from "./components/Rootlayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import CheckOut from "./pages/CheckOut"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<ProductDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    <Route path="*" element={<Error/>}></Route>
   
  </Route>
))


function App() {
  

  return (
    <>
   <RouterProvider router={router}/>
   
    </>
  )
}

export default App

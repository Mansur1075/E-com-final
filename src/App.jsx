import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Layouts from "./components/Layouts"
import ProductsDetails from "./pages/ProductsDetails"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import Journal from "./pages/Journal"
import Cart from "./pages/Cart"

let router = createBrowserRouter(createRoutesFromElements (
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductsDetails/>}></Route>
    <Route path="/contacts" element={<Contacts/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/journal" element={<Journal/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    

  </Route>
))


function App() {
 
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

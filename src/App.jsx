import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Layouts from "./components/Layouts"
import ProductsDetails from "./pages/ProductsDetails"

let router = createBrowserRouter(createRoutesFromElements (
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductsDetails/>}></Route>
    

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

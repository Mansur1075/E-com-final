import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Bennar from "./components/Bennar"
import Five from "./components/Five"
import Four from "./components/Four"
import Nevbar from "./components/Nevbar"
import Three from "./components/Three"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Layouts from "./components/Layouts"

let router = createBrowserRouter(createRoutesFromElements (
  <Route element={<Layouts/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    

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

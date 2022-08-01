import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
//import Home from "./pages/Home"
import Login from "./pages/Login"
import Nopage from "./pages/Nopage"
import Register from "./pages/Register"
import ProtectedRoutes from "./utils/ProtectedRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            {/*<Route path = {"/"} element = {<Home/>}/>*/}
            <Route path ={"/"} element= {<Register/>}/>
            <Route path={"/Login"} element = {<Login/>}/>
            <Route path = {"*"} element = {<Nopage/>}/>
            <Route element = {<ProtectedRoutes/>}>
              <Route path = "/Dashbord" element = {<Dashboard/>}/>
            </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar"
import EditServices from "./components/Edit_Services/EditServices"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit_services/:id" element={<EditServices/>}/>
    </Routes>      
    </>
  )
}

export default App

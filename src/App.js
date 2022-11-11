import Navbar from "./Navbar";
import Chat from "./components/links/Chat"
import Home from "./components/links/Home"
import Login from "./components/links/Login"
import Register from "./components/links/Register"

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
    </>
  )
}

export default App
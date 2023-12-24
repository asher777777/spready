import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"


export default function App() {
  return (
    <BrowserRouter>
    <Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/SignIn" element={<SignIn />} /> 
<Route path="/SignUp" element={<SignUp />} />



      </Routes>
    
    </BrowserRouter>
  )
}

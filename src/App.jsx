import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"
import Header from "./compoments/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/SignIn" element={<SignIn />} /> 
<Route path="/SignUp" element={<SignUp />} />



      </Routes>
    
    </BrowserRouter>
  )
}

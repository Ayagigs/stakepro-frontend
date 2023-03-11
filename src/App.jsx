import VerifyAccOne from "./components/VerifyAccOne"
import VerifyAccTwo from "./components/VerifyAccTwo"
import VerifyAccThree from "./components/VerifyAccThree"
import VerifyAccFour from "./components/VerifyAccFour"
import Logo from "./Logo"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<VerifyAccOne />} /> 
        <Route path="/verify2" element={<VerifyAccTwo />} /> 
        <Route path="/verify3" element={<VerifyAccThree />} /> 
        <Route path="/verify4" element={<VerifyAccFour />} /> 
      </Routes>
    </>
  )
}
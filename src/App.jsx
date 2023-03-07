import Login from "./components/Login";
import Mobile from "./components/Mobile";
import { Route, Routes } from "react-router-dom";
import Logo from "./Logo";

export default function App() {
  return (
    <>
      <>
        <Logo />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/mobile" element={<Mobile/>} />
        </Routes>
        
      </>
    </>
  )
}
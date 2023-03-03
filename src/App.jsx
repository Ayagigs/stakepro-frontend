import Login from "./components/Login";
import Mobile from "./components/Mobile";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/mobile" element={<Mobile/>} />
        </Routes>
        
      </>
    </>
  )
}
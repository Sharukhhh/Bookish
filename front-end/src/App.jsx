import { Routes , Route } from "react-router-dom";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login isUser={true} />}/>
          <Route path="/admin" element={<Login isUser={false} />}/>
        </Routes>
    </>
  )
}

export default App

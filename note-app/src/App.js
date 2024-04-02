import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./components/register/Signup";
import Login from "./components/register/Login";
import Notes from "./pages/notes/Notes";




function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/note" element={<Notes />} />
  
        
      </Routes>
  
  );
}

export default App;

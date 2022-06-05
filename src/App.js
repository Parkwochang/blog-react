import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./component/BlogForm";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";

function App() {
  
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

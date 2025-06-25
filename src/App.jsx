import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./component/home";
import Landing from "./component/landing";
import Skills from "./component/skills";
import About from "./component/about";
import Projects from "./component/projects";
import Education from "./component/education";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
         <Route path="/" element={<Landing/>}/>
         <Route path="/skills" element={<Skills/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/education" element={<Education/>}/>
        </Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default App

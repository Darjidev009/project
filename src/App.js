import About from "./About";
import Counter from "./Counter";
import Home from "./Home";
import Sum from "./Sum";
import Mystyle from "./Mystyle.css";
import Calculator from "./Calculator";
import Getdata from "./Getdata";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <h1 className="dev">Hello React</h1>
      <div>
        <Router >
          <Link to='/Home' className="Home">Home</Link>
          <Link to='/About' className="Home">About</Link>
          <Link to='/Counter' className="Home">Counter</Link>
          <Link to='/Sum' className="Home">Sum</Link>
          <Link to='/Calculator' className="Home">Calculator</Link>
          <Link to='/Getdata' className="Home">Getdata</Link>

          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="/Sum" element={<Sum />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Getdata" element={<Getdata />} />
          </Routes>
        </Router>
 
        <footer className="footer">
          <p className="text-footer">
            Copyright ©-All rights are reserved | Made By Darji Dev
          </p>
        </footer>
      </div>
    </>
  )
}


export default App;
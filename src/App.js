import React from "react";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import SharingKnowledge from "./pages/SharingKnowledge";
import Tariflar from "./pages/Tariflar";
import AboutCourse from "./pages/AboutCourse";
import Footer from "./pages/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/tariflar' component={Tariflar}/>
        <Route path='/kurs_haqida' component={AboutCourse} />
        <Route path='/blog' component={Blog} />
        <Route path='/bilim_ulashish' component={SharingKnowledge}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, {useEffect} from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
// import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";
import Domain from "./components/domain/Domain";
import Sponsors from "./components/sponsors/Sponsors";
import Faques from "./components/faq/Faques";
import Aboutevent from "./components/aboutevent/Aboutevent";
import Schedule from "./components/schedule/Schedule";
import Prizes from "./components/prizes/Prizes";
import Eventteam from "./components/eventteam/Eventteam";
import Contact from "./components/contact/Contact";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize('G-R7DHKR6XS6');



function PageViewTracker() {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);
  
    return null;
  }


const App = () => {
  return (
    <Router>
        <PageViewTracker />
      <Video />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Aboutevent />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Eventteam />} />
        <Route path="/faq" element={<Faques />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Domain />
      <Prizes />
      <Sponsors />
      <Eventteam />
      <Faques />
      <Contact /> */}
    </Router>
  );
};

export default App;

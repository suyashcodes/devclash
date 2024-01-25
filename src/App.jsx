import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Timer from "./components/timer/Timer";
import Video from "./components/background/Video";
import Domain from "./components/domain/Domain";
import Sponsors from "./components/sponsors/Sponsors";
import Faques from "./components/faq/Faques";
import Aboutevent from "./components/aboutevent/Aboutevent";
import Schedule from "./components/schedule/Schedule";
import Prizes from "./components/prizes/Prizes";
import Eventteam from "./components/eventteam/Eventteam";
import Contact from "./components/contact/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Video />
      <Navbar />
      <Routes>
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

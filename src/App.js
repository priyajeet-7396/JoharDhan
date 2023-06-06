import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/Navbar';
import Agenda from './pages/Agenda/Agenda';
import Outcome from './pages/Outcome/Outcome';
import Participants from './pages/Participants/Participants';
import Speakers from './pages/Speakers/Speakers';

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Agenda />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/outcome" element={<Outcome />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>
    </Router>
  );
};

export default App;

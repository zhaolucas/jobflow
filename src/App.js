import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import Footer from './components/Footer/index';
import { Home, JobForm, JobSearch} from './Pages';
import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <Router basename="">
      <div className="d-flex flex-column min-vh-100"> 
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JobForm" element={<JobForm />} />
          <Route path="/JobSearch" element={<JobSearch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

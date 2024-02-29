import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import JobCard from './components/JobCard';
import { Home, JobForm, JobSearch} from './Pages';
import './App.css';

function App() {
  return (
    <Router basename={``}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/JobForm' element={<JobForm />} />
        <Route path='/JobSearch' element={<JobSearch />} />
      </Routes>
      <JobCard />
    </Router>
  )
}

export default App;

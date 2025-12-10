import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import FormSummary from './components/FormSummary/FormSummary';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/summary" element={<FormSummary />} />
      </Routes>
    </Router>
  );
}

export default App;

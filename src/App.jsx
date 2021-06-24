import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router >
      <AnimatePresence exitBeforeEnter>
        <Home />
      </AnimatePresence>
    </Router>
  );
}

export default App;
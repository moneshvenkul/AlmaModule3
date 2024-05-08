import React from 'react';
import Home from './home';
import About from './about';
import Contact from './contact';
import MyComponent from './MyComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nav" element={<Home />}>
          <Route path="page/:id" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path='/counter' element={<Counter/>} />
        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="*" element={<h1>Sorry, the page is not available</h1>} />
      </Routes>

    </Router>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Header } from 'components/Header';

export const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
        <Routes>
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Routes>
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

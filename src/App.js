import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Header } from 'components/Header';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Modal } from 'components/Modal';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Modal />
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

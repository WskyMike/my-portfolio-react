import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppContexts from '../Сontexts/AppContexts';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Contacts from './Contacts/Contacts';
import Pictures from './Pictures/Pictures';
import Projects from './Projects/Projects';

import './App.scss';

function App() {
  return (
    <AppContexts.Provider value={false}>
      <div className="App">
        <Header />
        <Contacts />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </AppContexts.Provider>
  );
}

export default App;

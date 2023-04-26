import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContexts from '../Сontexts/AppContexts';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import NotFound from './404/404';
import Contacts from './Contacts/Contacts';
import Pictures from './Pictures/Pictures';
import Projects from './Projects/Projects';

import './App.css';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AppContexts.Provider>
  );
}

export default App;

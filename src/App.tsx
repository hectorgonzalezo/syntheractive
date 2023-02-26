import React, { useState } from 'react';
import Header from './components/Header';
import SynthMain from './components/SynthMain';
import Footer from './components/Footer';
import './styles/app.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <SynthMain />
      <Footer projectName='syntheractive' />
    </div>
  );
}

export default App;

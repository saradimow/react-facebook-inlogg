import React from 'react';
import './App.css';


import Facebook from './components/facebook';
import FacebookLogin from 'react-facebook-login';


import { render } from '@testing-library/react';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Facebook />
      </header>
    </div>
  );
}



export default App  ;

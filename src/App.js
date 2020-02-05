import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Wall from './components/Wall';

function App() {
  return (
    <div>
      <div>
         <Header />
      </div>
      <div>
      <Wall />
      </div>
    </div>
  );
}

export default App;

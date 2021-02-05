import './App.css';
import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ShowPirate from './views/ShowPirate';
import NewPirate from './views/NewPirate';
import UpdatePirate from './views/UpdatePirate';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/pirates" />
        <ShowPirate path="/pirate/:id" />
        <NewPirate path="/pirates/new/" />
        <UpdatePirate path="/pirate/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
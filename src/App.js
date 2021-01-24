import React from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from './components/Figure'

function App() {
  return (
    <div>
      <Header />
      <div className="game-container">
<Figure />
      </div>
    </div>
  );
} 

export default App;

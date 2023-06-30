import './App.css';
import Apps from './components/Apps'
// import Home from './components/Home'
import User from './components/User';
import { useState } from 'react'
function App() {
  const [currTab,setCurrTab] = useState("All Apps");
  return (
    <div className="App">
      <User currTab={currTab} setCurrTab = {setCurrTab}/>
      <Apps currTab={currTab}/>
    </div>
  );
}

export default App;

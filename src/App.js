// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#85898dff';
     
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffffff';
     
    }
  }


  return (
<>
 <Navbar title = "newTitle" mode = {mode} toggleMode={toggleMode} />


 <div className="container my-3" >
 <TextForm heading = "Enter your text to analyze" />
 </div>

{/* <About/> */}

</>
    
  );
}

export default App;

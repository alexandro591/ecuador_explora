import React, { useState } from 'react';
import './css/App.css';
import './fontawesome/css/all.css';
import Main from './Header'

function handleClick(ref,setPath){
  navigator.vibrate(100);
  setPath(ref);
  try {
      document.getElementById("home").removeAttribute("id");
  } catch{}
}

function App() {
  const [path, setPath] = useState("home");
  
  return (
    <div className="App" style={{maxHeight: window.innerHeight,minHeight: window.innerHeight}}>
      <section className="App-main" style={{maxHeight: window.innerHeight*0.9,minHeight: window.innerHeight*0.9}}>
        <Main path={path}/>
      </section>

      <section id="navbar">
        <div className="nav-bar" style={{maxHeight: window.innerHeight*0.1,minHeight: window.innerHeight*0.1}}>
          
          <div className="nav-item home" id="home">

            <button onClick={()=>{handleClick("home",setPath)}}>
              <i className="fas fa-home" aria-hidden="true"></i><br/>
              Inicio
            </button>  
          </div>

          <div className="nav-item">
            <button onClick={()=>{handleClick("destinations",setPath)}}>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i><br/>
              Destinos
            </button>
          </div>

          <div className="nav-item">
            <button onClick={()=>{handleClick("about",setPath)}}>
              <i className="fas fa-address-card" aria-hidden="true"></i><br/>
              Acerca de
            </button>  
          </div>
          
          <div className="nav-item">
            <button onClick={()=>{handleClick("contact",setPath)}}>
              <i className="fas fa-envelope" aria-hidden="true"></i><br/>
              Contacto
            </button>  
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;

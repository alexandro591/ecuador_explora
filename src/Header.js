import React, { useState } from 'react';
import './css/textAnimation.css';
import ScriptTag from 'react-script-tag';

function Main(localref){


  
  const [search, setSearch] = useState("");


  if(localref.path==="home"){
    return (
      <section id="main">

        <div className="topbar">
          <img src="./img/escudoEcuador.svg" alt="mapaEcuador"/>
        </div>

        <hr/>

        <div className="mapaEcuador">
          <img src="./img/mapaEcuador.svg" alt="mapaEcuador"/>
        </div>

        <div>

          <h1 className="ml6">
            <span className="text-wrapper">
              <span className="letters">Ecuador Explora</span>
            </span>
          </h1>

          <hr/>

          <h2 className="description">
            <span className="shortdescription"><i className="fa fa-hand-peace" aria-hidden="true"></i>Se parte de la mayor red de destinos del Ecuador.</span>
            <span className="shortdescription"><i className="fa fa-bed" aria-hidden="true"></i>Hospedaje, alimentación, tours, transporte, sitios de interés, galería y demás.</span>
            <span className="shortdescription"><i className="fa fa-binoculars" aria-hidden="true"></i>Encuentra todo lo que buscas y explora más a fondo el hermoso territorio ecuatoriano.</span>
          </h2>

          <hr/>

          <div className="carousel">
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="carousel-item">
              <img src="./img/mamaNegra.jpg" alt="mapaEcuador"/>
              <h4 className="des">La mama negra</h4>
            </div>
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="carousel-item">
              <img src="./img/floresFrutas.jpg" alt="mapaEcuador"/>
              <h4 className="des">Fiesta de las flores y las frutas</h4>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="carousel-item">
              <img src="./img/diabladaPillaro.jpg" alt="mapaEcuador"/>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className="carousel-item">
              <img src="./img/CarnavalGuaranda.jpg" alt="mapaEcuador"/>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;

          </div>
          <h2>
            <span><i className="fa fa-gifts" aria-hidden="true"></i> Fiestas Populares</span>
          </h2>
          <hr/>

        </div>
        <ScriptTag isHydrating={false} type="text/javascript" src="./js/anime.js" />
        <ScriptTag isHydrating={false} type="text/javascript" src="./js/textAnimation.js" />

      </section>
      
    )
    
  }
  else if(localref.path==="destinations"){
    
    return (
      <section id="main">
        <div id="search">
          <input placeholder="Buscar" value={search} onChange={e=>setSearch(e.value)}/>
        </div>
        <div id="cities">
          <div id="tena">
            <span className="city">Tena</span>
            <span className="description">Tena</span>
          </div>
          <div id="tena">
            <span className="city">Quito</span>
          </div>
          <div id="tena">
            <span className="city">Ambato</span>
          </div>
        </div>
      </section>
    )
  }
}

export default Main;

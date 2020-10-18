import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/map.svg';


function Landing () {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
        <div className="logo">
            <img src={logoImg} alt="Happy" className="map-color"/> Undercover
        </div>
      
          <main>
            <h1>Leve a diversidade sexual e de gênero  para o mundo!</h1>
            <p>Conheça as Ongs e Projetos LGBTQIA+ da Cidade.</p>
          </main>
     
          <div className="location">
            <strong>Rio Grande do Sul</strong>
            <span>Porto alegre</span>
          </div>

          <Link to="/app" className="enter-app"><FiArrowRight size={26} color="rgba( 0, 0, 0, 0.6)"/></Link>

      </div>
    </div>

    );
}

export default Landing;
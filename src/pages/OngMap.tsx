import React from 'react';
import mapMarkerImg from '../images/map.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/ongmap.css';


function OngMap () {
    return (
      <div id="page-map">
          <aside>
              <header>
                  <img src={mapMarkerImg} alt="Mappy"></img>

                  <h1>Escolha a Ong no Mapa</h1>
                  <p>Conheça as ações socias, projetos e como colaboar com o crescimento da ong :)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
          
              </header>

              <footer>
                  Porto Alegre, Rs.
              </footer>
          </aside>
          <Map center={[-30.1087957,-51.3172298]} zoom={11} style={{width: '100%', height: '100%'}}>
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </Map>
          
          <Link to="" className="create-ong">
              <FiPlus size={32} color="#fff"></FiPlus>
          </Link>
      </div>
    );
}

export default OngMap;
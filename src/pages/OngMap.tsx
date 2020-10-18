import React, { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowDownRight, FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapFlag from '../images/map.svg';
import mapMarkerImg from '../images/map.svg';

import { useHistory } from 'react-router-dom';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/ongmap.css'; 
import api from '../services/api';


interface Ong {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const mapIcon = Leaflet.icon({
    iconUrl: mapFlag,
    iconSize: [55, 55],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

function OngMap () {

    const [ongs, setOngs] = useState<Ong[]>([]);

    useEffect(() => {

        api.get('ongs').then(response => {
            setOngs(response.data);
        });
    }, []) ;// euq uero que execute essa função quando alguma desssas variaveis do vetor mudarem


    const { goBack } = useHistory();

    return (
      <div id="page-map">
          <aside>
              <header>
                  <img src={mapMarkerImg} alt="Mappy" className="map-color"></img>

                  <h1>Escolha a Ong no Mapa!</h1>
                  <p>Conheça as ações socias, projetos e como colaboar com o crescimento da ong :)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
          
              </header>

              <footer>
                  Porto Alegre, Rs.
                  <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                 </button>

              </footer>
          </aside>
          <Map center={[-30.0295947,-51.2282828]} zoom={15} style={{width: '100%', height: '100%'}}>

              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
              />

             {ongs.map(ong => {
                 console.log(ong);
                 return (
                    <Marker key={ong.id} icon={mapIcon} position={[ong.latitude, ong.longitude]} >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {ong.name}
                        <Link to={`/ongs/${ong.id}`}>
                            <FiArrowDownRight size={20} color="#fff"></FiArrowDownRight>
                        </Link>
                    </Popup>
                </Marker>
                 );
             })};

            
          </Map>
          
          <Link to="/ongs/create" className="create-ong">
              <FiPlus size={32} color="#fff"></FiPlus>
          </Link>

      </div>
    );
}

export default OngMap;
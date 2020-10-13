import React from 'react';
import './styles/global.css';

import Routes from './routes'


// componente - todo componente eretorna uma fun��o HTML "JSX"

/* interface TitleProps {
  text: string;
}

function Title (props : TitleProps) {
  return (
  <h1>{props.text}</h1> 
  )
  
} */

function App() {
  return (
    <Routes />
  );
}

export default App;

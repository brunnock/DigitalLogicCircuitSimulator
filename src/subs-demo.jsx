import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {halfSub,fullSub} from './subs.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>Half Subtractor</legend>
      <Circuit key='half' circuitID='half' parts={halfSub} height={300} />
    </fieldset>
    
    <fieldset>
      <legend>Full Subtractor</legend>
      <Circuit key='full' circuitID='full' parts={fullSub} width={1100} height={450} />
    </fieldset>

  </React.StrictMode>
);


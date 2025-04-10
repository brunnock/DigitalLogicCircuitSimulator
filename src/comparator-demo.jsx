import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {comparator1} from './comparator.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>1 Bit Comparator</legend>
      <Circuit key='comparator1' circuitID='comparator1' parts={comparator1} width={800} height={300} />
    </fieldset>

  </React.StrictMode>
);

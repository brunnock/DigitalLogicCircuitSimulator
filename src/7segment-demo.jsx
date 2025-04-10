import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {seven, sevenComp} from './7segment.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>7 Segment LED</legend>
      <p>Most wires in this circuit are hidden until charged.</p>
      <Circuit key='seven' circuitID='seven' parts={seven} width={900} height={900} />
    </fieldset>
    
    <fieldset>
      <legend>7 Segment LED Component</legend>
      <p>This component combines a hexadecimal decoder with a 7 segment display.</p>
      <Circuit key='sevenComp' circuitID='sevenComp' parts={sevenComp} width={300} height={170} />
    </fieldset>
    
  </React.StrictMode>);

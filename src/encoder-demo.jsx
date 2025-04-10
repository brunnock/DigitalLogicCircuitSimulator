import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {keypad, encoder8x3, encoder8x3comp} from './encoder.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>8-3 Encoder</legend>
      <p>
	This circuit maps explicit decimal values to binary equivalents.
	It cheats a little- the zero button isn't connected to anything. 
      </p>
      <Circuit key='encoder8x3' circuitID='encoder8x3' parts={encoder8x3} width={900} height={500} />
    </fieldset>

    <fieldset>
      <legend>8-3 Encoder Component</legend>
      <Circuit key='encoder8x3comp' circuitID='encoder8x3comp' parts={encoder8x3comp} width={400} height={320} />
    </fieldset>
    
    <fieldset>
      <legend>Keypad</legend>
      <p>
	This is an integrated numeric keypad and 10-4 encoder connected to a 7 segment output with an integrated hexadecimal decoder.
      </p>
      <Circuit key='keypad' circuitID='keypad' parts={keypad} width={300} height={300} />
    </fieldset>
    

  </React.StrictMode>
);

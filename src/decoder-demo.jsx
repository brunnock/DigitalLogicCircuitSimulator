import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {decoder2x4,decoder2x4component,hex2bcd} from './decoder.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>2x4 Decoder</legend>
      <p>
	This takes a 2-bit input and returns a decimal value from 0 to 3.
      </p>
      <Circuit key='decoder2x4' circuitID='decoder2x4' parts={decoder2x4} height={600} width={600} />
    </fieldset>

    <fieldset>
      <legend>2x4 Decoder Component</legend>
      <Circuit key='decoder2x4component' circuitID='decoder2x4component' parts={decoder2x4component} height={150} width={300} />
    </fieldset>

    <fieldset>
      <legend>Hex2BCD Decoder</legend>
      <p>
	This is a component converts a hexadecimal digit to <a href="https://en.wikipedia.org/wiki/Binary-coded_decimal">BCD format</a>. It takes the 3 upper bits from the digit to convert and the lowest bit from the left-hand digit.
      </p>
      <Circuit key='hex2bcd' circuitID='hex2bcd' parts={hex2bcd} height={250} width={300} />
    </fieldset>

  </React.StrictMode>
);

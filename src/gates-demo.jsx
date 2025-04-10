import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {notParts,andParts,nandParts,orParts,norParts,xorParts,xnorParts} from './parts.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <fieldset>
      <legend>NOT</legend>
      <Circuit key='not' circuitID='not' parts={notParts} height={200} />
    </fieldset>
    
    <fieldset>
      <legend>AND</legend>
      <Circuit key='and' circuitID='and' parts={andParts} height={300} />
    </fieldset>

    <fieldset>
      <legend>NAND</legend>
      <Circuit key='nand' circuitID='nand' parts={nandParts} height={300} />
    </fieldset>
    
    <fieldset>
      <legend>OR</legend>
      <Circuit key='or' circuitID='or' parts={orParts} height={300} />
    </fieldset>

    <fieldset>
      <legend>NOR</legend>
      <Circuit key='nor' circuitID='nor' parts={norParts} height={300} />
    </fieldset>

    <fieldset>
      <legend>XOR</legend>
      <Circuit key='xor' circuitID='xor' parts={xorParts} height={300} />
    </fieldset>

    <fieldset>
      <legend>XNOR</legend>
      <Circuit key='xnor' circuitID='xnor' parts={xnorParts} height={300} />
    </fieldset>

  </React.StrictMode>
)

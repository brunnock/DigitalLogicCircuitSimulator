import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {passBlock,muxComp4x1,muxChain,mux2x1Component,triBuffer,mux2x1,mux4x1} from './mux.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>Pass/Block</legend>
      <p>
	A Pass/Block circuit determines if the <i>A</i> input gets passed or not.
      </p>
      <Circuit key='passBlock' circuitID='passBlock' parts={passBlock} height={200} width={400} />
    </fieldset>


    <fieldset>
      <legend>Tri-state Buffer</legend>
      <p>
	A tri-state buffer also determines if an input is forwarded or not.
      </p>
      <Circuit key='triBuffer' circuitID='triBuffer' parts={triBuffer} height={200} width={400} />
    </fieldset>


    
    <fieldset>
      <legend>2-1 Mux</legend>
      <p>
	If <b>S</b> is off, then the output is <b>A</b>.
	If <b>S</b> is on, then the output is <b>B</b>.
      </p>
      <Circuit key='mux2x1' circuitID='mux2x1' parts={mux2x1} height={310} />
    </fieldset>

    
    <fieldset>
      <legend>2-1 Mux Component</legend>
      <Circuit key='mux2x1' circuitID='mux2x1' parts={mux2x1Component} height={125} width={225} />
    </fieldset>
    
    <fieldset>
      <legend>4-1 Mux</legend>
      <Circuit key='mux4x1' circuitID='mux4x1' parts={mux4x1} height={660} width={800} />
    </fieldset>
    

    <fieldset>
      <legend>4-1 Mux from 2-1 muxes</legend>
      <p>
	You can chain multiplexers to make bigger ones.
      </p>
      <Circuit key='muxChain' circuitID='muxChain' parts={muxChain} height={200} width={275} />
    </fieldset>
    
    
    <fieldset>
      <legend>4-1 Mux Component</legend>
      <Circuit key='muxComp4x1' circuitID='muxComp4x1' parts={muxComp4x1} height={175} width={300} />
    </fieldset>
    
    
  </React.StrictMode>);


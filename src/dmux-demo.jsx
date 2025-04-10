import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {demux2,dmux2comp,dmux2chain,demux4,dmux4comp} from './dmux.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <fieldset>
      <legend>1-2 Demultiplexer</legend>
      <Circuit key='demux2' circuitID='demux2' parts={demux2} width={500} height={350} />
    </fieldset>

    <fieldset>
      <legend>1-2 Demultiplexer Component</legend>
      <Circuit key='dmux2comp' circuitID='dmux2comp' parts={dmux2comp} width={200} height={150} />
    </fieldset>

    <fieldset>
      <legend>1-4 Demultiplexer</legend>
      <Circuit key='demux4' circuitID='demux4' parts={demux4} width={550} height={550} />
    </fieldset>

    <fieldset>
      <legend>1-4 Demultiplexer from chained 1-2 dmuxes</legend>
      <Circuit key='dmux2chain' circuitID='dmux2chain' parts={dmux2chain} width={320} height={280} />
    </fieldset>

    <fieldset>
      <legend>1-4 Demultiplexer Component</legend>
      <Circuit key='dmux4comp' circuitID='dmux4comp' parts={dmux4comp} width={200} height={250} />
    </fieldset>

  </React.StrictMode>
);

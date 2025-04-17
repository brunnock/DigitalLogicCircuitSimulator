import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {posDflip,flipComponent,register1,nibble,nibbles,flipCounter1,flipCounter4,counter7segment} from './flips.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>Positive Edge Triggered D Flip-Flop</legend>
      <p>
	<b>Q</b> and <b className="over">Q</b> reflect the <b>D</b> input when the clock rises from 0 to 1.
      </p>
      <Circuit key='posDflip' circuitID='posDflip' parts={posDflip} width={600} height={750} />
    </fieldset>

    <fieldset className="thirty">
      <legend>Flip-Flop component</legend>
      <Circuit key='flipComponent' circuitID='flipComponent' parts={flipComponent} width={400} height={200} />
    </fieldset>
    
    <fieldset className='fifty'>
      <legend>4 Bit Register</legend>
      <p>
	If you group flip-flops, they can form a <a href="https://en.wikipedia.org/wiki/Processor_register">register</a>. 4 bits make up a <a href="/React/BinarySwitches/">nibble</a>. 
      </p>
      <p>
	Note that the flip-flops here are reversed so the MSB (Most Significant Bit) is on the left hand side.
      </p>
      <Circuit key='register1' circuitID='register1' parts={register1} width={900} height={400} />
    </fieldset>

    <fieldset className='thin'>
      <legend>Nibble Component</legend>
      <p>
	Below is a nibble register shown as a single component connected to a seven segment display and decoder.
	Note that the keypad has an extra output to indicate if a key is pressed so other components will know if "0" was pressed.
      </p>
      <Circuit key='nibble' circuitID='nibble' parts={nibble} width={155} height={320} />
    </fieldset>
    
    <fieldset style={{width:'40em'}}>
      <legend>Nibbles</legend>
      <p>
	Below, we chained 4 registers so with each clock signal, each register updates itself with the state of the prior register (or the keypad in the case of the first register). When values update this way, it's called a <i>left shift</i>.
      </p>
      <Circuit key='nibbles' circuitID='nibbles' parts={nibbles} width={600} height={650} />
    </fieldset>
    
    <fieldset>
      <legend>1 Bit Counter</legend>
      <p>
	If you connect the <b className='over'>Q</b> output to the <b>D</b> input,
	then you get a circuit that flips a bit everytime the clock cycles.
      </p>
      <Circuit key='flipCounter1' circuitID='flipCounter1' parts={flipCounter1} width={400} height={200} />
    </fieldset>

    
    <fieldset className='fifty'>
      <legend>4 Bit Up Counter</legend>
      <p>
	If you chain flip-flops together, you can create a cascading effect.
      </p>
      <p>
	Also called a ripple counter.
      </p>
      <p>
	Note that the flip-flops here are reversed so the MSB (Most Significant Bit) is on the left hand side.
      </p>
      <Circuit key='flipCounter4' circuitID='flipCounter4' parts={flipCounter4} width={1000} height={300} />
    </fieldset>

    <fieldset className='fifty'>
      <legend>4 Bit Up Counter with 7 Segment Display</legend>
      <Circuit key='counter7segment' circuitID='counter7segment' parts={counter7segment} width={1000} height={400} />
    </fieldset>

  </React.StrictMode>);

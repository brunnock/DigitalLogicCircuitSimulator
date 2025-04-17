import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {halfAdder,halfComponent,fullAdder,twoHalfComponents,fullComponent,chainedAdders,BCDadder} from './adders.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <fieldset>
      <legend>Half Adder</legend>
      <p>A half adder adds 2 bits. This adder consists of an XOR gate and an AND gate. The buttons on the left represent the input.
      The top light on the right represents the sum and the bottom light represents the carryover.</p>
      <p>If you input no values, then the sum is zero and the carryover is zero.</p>
      <p>If you input 1 bit, then the sum is one and the carryover is zero.</p>
      <p>If you input 2 bits, then the sum is two. To represent this, we set the sum to zero and the carryover to one.</p>
      <p>Click on the <b>A</b> and <b>B</b> buttons to see this adder in action.</p>
      <Circuit key='half' circuitID='half' parts={halfAdder} height={300} />
    </fieldset>
    
    <fieldset>
      <legend>Half Adder Component</legend>
      <Circuit key='halfComponent' circuitID='halfComponent' parts={halfComponent} width={300} height={300} />
    </fieldset>

    
    <fieldset>
      <legend>Full Adder</legend>
      <p>A full adder combines 2 half adders and can sum 3 bits.
	One half adder handles the A and B inputs.
      The other handles the output from the A/B adder and a C input.</p>
      <p>Click on the <b>A</b>, <b>B</b> and <b>C</b> buttons to see this adder in action.</p>
      <Circuit key='full' circuitID='full' parts={fullAdder} width={1100} height={450} />
    </fieldset>

    
    <fieldset>
      <legend>Full adder from 2 half adder components</legend>
      <Circuit key='twoHalfComponents' circuitID='twoHalfComponents' parts={twoHalfComponents} width={700} height={400} />
    </fieldset>
    
    <fieldset>
      <legend>Full adder component</legend>
      <Circuit key='fullComponent' circuitID='fullComponent' parts={fullComponent} width={400} height={300} />
    </fieldset>

    <fieldset>
      <legend>4 Bit Adder</legend>
      <p>
	By chaining together adders, you can sum larger numbers. This adder will only display hex sums up 15.
      </p>
      <Circuit key='chainedAdders' circuitID='chainedAdders' parts={chainedAdders} width={650} height={650} />
    </fieldset>
    
    <fieldset>
      <legend>4 Bit BCD Adder</legend>
      <p>
	A 4 bit adder with BCD output.
      </p>
      <Circuit key='BCDadder' circuitID='BCDadder' parts={BCDadder} width={650} height={850} />
    </fieldset>

    
    
  </React.StrictMode>);

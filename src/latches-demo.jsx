import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Circuit from './circuit.jsx'
import {norLatch2,andOrLatch,norLatch,SrNandLatch,dNorLatch,dNandLatch,gatedSrNandLatch,gatedSrNorLatch,dLatch1,dLatch2,dLatch3,earle,jk,GDLatchComponent,fourBitRegister} from './latches.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>

    <fieldset>
      <legend>SR Latch</legend>
      <p>
	This is a basic Set/Reset (or SR) latch. It stores 1 bit of data.
      </p>
      <Circuit key='norLatch2' circuitID='norLatch2' parts={norLatch2} height={300}  />
    </fieldset>

    <fieldset>
      <legend>SR AND/OR Latch</legend>
      <p><i>SR</i> is short for <i>Set/Reset</i>.</p>
      <Circuit key='andOrLatch' circuitID='andOrLatch' parts={andOrLatch} height={300} />
    </fieldset>

    <fieldset>
      <legend>SR NOR Latch</legend>
      <Circuit key='norLatch' circuitID='norLatch' parts={norLatch} height={300} width={550} />
    </fieldset>

    <fieldset>
      <legend><u>SR</u> NAND Latch</legend>
      <p>The overline denotes a complementary value.</p>
      <Circuit key='SrNandLatch' circuitID='SrNandLatch' parts={SrNandLatch} height={300} width={550} />
    </fieldset>

    <fieldset>
      <legend>D Latch with NOR Gates</legend>
      <Circuit key='dNorLatch' circuitID='dNorLatch' parts={dNorLatch} height={300} width={550} />
    </fieldset>
    
    <fieldset>
      <legend>D Latch with NAND Gates</legend>
      <Circuit key='dNandLatch' circuitID='dNandLatch' parts={dNandLatch} height={300} width={550} />
    </fieldset>
    
    <fieldset>
      <legend>Gated SR NAND Latch</legend>
      <p>This latch can only change if <i>Enable</i> is high. The enable input can also be referred to as <i>Write (W)</i>, <i>Write Enable (WE)</i>, <i>Clock (Clk)</i> or <i>Control</i>.</p>
      <Circuit key='gatedSrNandLatch' circuitID='gatedSrNandLatch' parts={gatedSrNandLatch} height={300} />
    </fieldset>

    <fieldset>
      <legend>Gated SR NOR Latch</legend>
      <Circuit key='gatedSrNorLatch' circuitID='gatedSrNorLatch' parts={gatedSrNorLatch} height={300} width={550} />
    </fieldset>

    <fieldset>
      <legend>Gated D Latch</legend>
      <p>
	Also called a level-triggered D-type flip-flop.
      </p>
      <Circuit key='dlatch1' circuitID='dlatch1' parts={dLatch1} height={300} width={550} />
    </fieldset>

    <fieldset>
      <legend>Another Gated D Latch</legend>
      <Circuit key='dlatch2' circuitID='dlatch2' parts={dLatch2} height={300} />
    </fieldset>
    
    <fieldset>
      <legend>Simpler Gated D Latch</legend>
      <Circuit key='dlatch3' circuitID='dlatch3' parts={dLatch3} height={300} />
    </fieldset>

    <fieldset>
      <legend>Earle Latch</legend>
      <p>
	This latch allows data to be set when E (or the clock) is high, but not otherwise.
      </p>
      <p>Invented by John G. Earle for the IBM System/360 Model 91.</p>
      <Circuit key='earle' circuitID='earle' parts={earle} width={650} height={450} />
    </fieldset>
    
    <fieldset>
      <legend>JK Latch</legend>
      <p>
	A JK latch should toggle state when J and K are high, but this leads to a race condition in this simulator.
      </p>
      <p>
	Named for Jack Kilby.
      </p>
      <Circuit key='jk' circuitID='jk' parts={jk} height={400} />
    </fieldset>

    <fieldset>
      <legend>Gated D Latch Component</legend>
      <Circuit key='GDLatchComponent' circuitID='GDLatchComponent' parts={GDLatchComponent} width={400} height={200} />
    </fieldset>

    <fieldset>
      <legend>4 Bit Register</legend>
      <p>4 bits is a nibble.</p>
      <Circuit key='fourBitRegister' circuitID='fourBitRegister' parts={fourBitRegister} width={700} height={400} />
    </fieldset>

    
  </>
);    

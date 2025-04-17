import React from 'react';
import reducer from './reducer.js';
import {splitRegex} from './common.js';
import {Wire,Button,TempButton,Light,LED,Selector,Node} from './discrete.jsx';
import {NOT,AND,NAND,OR,NOR,XOR,XNOR,Buffer} from './gates.jsx';
import {HexSevenSegment,Encoder8x3,Keypad,Dmux2,Dmux4,Decoder2x4,Hex2BCD,Mux,Mux2,GatedDlatch,UpDownGDlatch,HalfAdder,FullAdder,FlipD,FlipBT,Nibble,TempKeypad,FlipDRL} from './components.jsx';

function setInputs(parts) {
  // go through parts, find outputs, set their inputs
  Object.keys(parts).forEach(x => {
    let part = parts[x];
    
    if (!part.state) part.state = false; // fix undefined

    if ( (typeof part.out === 'string') && (part.out.length>0) ) part.out = part.out.split(splitRegex);

    if (!Array.isArray(part.out)) {
      part.out=[];
      return;
    }

    part.out.forEach(y => {
      // for each part y, set its input to x
      try {if (!Array.isArray(parts[y].in)) parts[y].in = []}
      catch {alert('trouble with '+y +' at circuit.jsx 18')} 
      if (parts[y].in.includes(x)) return;
      parts[y].in.push(x);
    });
    
  });

  return(parts);
}


function prepParts(parts) {
  // go through selector buttons and set their outputs
  Object.keys(parts).filter(x=>parts[x].type==='selector').forEach(x => {
    let part = parts[x];
    Object.keys(part.buttons).forEach((y,indx)=>{
      parts[x+'_'+indx] = {type:null}; // prevent rendering
      parts[x+'_'+indx].out = parts[x].buttons[y].out;
    })
  })


  // go through components and create their dummy parts (inputs and outputs)
  Object.keys(parts).filter(x=>(parts[x].type && parts[x].type.startsWith('component'))).forEach(x => {
    let part = parts[x];

    if (part.ins) {
      if (typeof part.ins === 'string') part.ins = part.ins.split(splitRegex);
      part.ins.forEach(y=>{
	// y represents each input for this component
	parts[x+'_'+y] = {type:null, out:x};
      })
    };

    if (part.sigs) {
      part.selected ||= 0;
      part.sigs = part.sigs.split(splitRegex);
      part.sigs.forEach(y=>{
	// y represents each signal for this component
	// used in multiplexers
	parts[x+'_'+y] = {type:null, out:x};
      })
    };
    
    if (part.outs) {
      Object.entries(part.outs).forEach(([outlet,targets])=>{
	part.state ??= {};
	parts[x+'_'+outlet] = {type:'parent', parent:x, property:outlet, state:part.state[outlet]}; 
	parts[x+'_'+outlet].out = targets;
	part.state[outlet] ??= false;
      })
    }

    part.type = part.type.split(/\s+/)[1]; // strip off "component"
  });
  
  return setInputs(parts);
};


function Circuit(props) {
  const [state, dispatch] =
        React.useReducer(reducer, {parts:prepParts(props.parts)});

  //console.log(state);
  
  return (
    <svg id={props.circuitID} viewBox={`0 0 ${(props.width || 600)} ${(props.height || 600)}`}>

  {Object.entries(state.parts).map( ([partID,props]) => {
     switch (props.type) {
	
     case 'node':
       return <Node key={partID} cx={props.cx} cy={props.cy} />

     case 'button':
       return <Button key={partID} partID={partID} props={props} dispatch={dispatch} />

     case 'selector':
       return <Selector key={partID} partID={partID} props={props} dispatch={dispatch} />

     case 'keypad':
       return <Keypad key={partID} partID={partID} props={props} dispatch={dispatch} />

     case 'tempKeypad':
       return <TempKeypad key={partID} partID={partID} props={props} dispatch={dispatch} />

     case 'tempButton':
       return <TempButton key={partID} partID={partID} props={props} dispatch={dispatch} />

     case 'wire':
       return <Wire key={partID} props={props} />
	  
     case 'light':
       return <Light key={partID} props={props} />
        
     case 'diode':
       return <Diode key={partID} props={props} />
        
     case 'led':
       return <LED key={partID} props={props} />
        
     case 'buffer':
       return <Buffer key={partID} props={props}  />

     case 'not':
       return <NOT key={partID} props={props}  />

     case 'and':
       return <AND key={partID} props={props}  />

     case 'nand':
       return <NAND key={partID} props={props}  />

     case 'or':
       return <OR key={partID} props={props}  />

     case 'nor':
       return <NOR key={partID} props={props}  />

     case 'xor':
       return <XOR key={partID} props={props}  />

     case 'xnor':
       return <XNOR key={partID} props={props}  />

     case 'halfAdder':
       return <HalfAdder key={partID} props={props}  />

     case 'fullAdder':
       return <FullAdder key={partID} props={props}  />

     case 'gatedDlatch':
       return <GatedDlatch key={partID} props={props}  />

     case 'upDownGDlatch':
       return <UpDownGDlatch key={partID} props={props}  />

     case 'flipD':
       return <FlipD key={partID} props={props}  />

     case 'flipDRL':
       return <FlipDRL key={partID} props={props}  />

     case 'flipBT':
       return <FlipBT key={partID} props={props}  />

     case 'mux':
       return <Mux key={partID} id={partID} props={props}  />

     case 'mux2':
       return <Mux2 key={partID} id={partID} props={props}  />

     case 'dmux2':
       return <Dmux2 key={partID} id={partID} props={props}  />

     case 'dmux4':
       return <Dmux4 key={partID} id={partID} props={props}  />

     case 'decoder':
       return <Decoder2x4 key={partID} id={partID} props={props}  />

     case 'encoder8x3':
       return <Encoder8x3 key={partID} id={partID} props={props}  />

     case 'hex7segment':
       return <HexSevenSegment key={partID} props={props}  />

     case 'hex2bcd':
       return <Hex2BCD key={partID} props={props}  />

     case 'nibble':
       return <Nibble key={partID} props={props}  />

     case 'raw':
       return <g key={partID} dangerouslySetInnerHTML={{__html:props.text}}></g>
        
     }
   }
  )}
    </svg>
  )
}

export default Circuit;

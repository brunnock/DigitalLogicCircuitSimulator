function reducer(state2, action) {
  let state = structuredClone(state2);
  //console.log(action);
  //console.log(state);

  const OR  = (arr) =>  arr.map(x=>state.parts[x].state).includes(true);
  const AND = (arr) => !arr.map(x=>state.parts[x].state).includes(false);
  
  function calculateState (part,partID)  {
    try {
      part.in ||= [];
    }
    catch(e) {
      alert('trouble with ' +partID);
      return null;
    };
    
    let selected=null, input=null, output=null, D=null, E=null, oldClk=false, newClk=false, newState={};
    let [a,b,c] = part.in.map(x=>state.parts[x].state);
    
    switch (part.type) {

    case 'wire':  return a;

    case 'not':   return !a;

    case 'and':
    case 'buffer':
      return AND(part.in);
      
    case 'or':    return OR(part.in);
      
    case 'nand':  return !AND(part.in);
      
    case 'nor':   return !OR(part.in);

    case 'xor':   return OR(part.in) && !AND(part.in);

    case 'xnor':  return !(OR(part.in) && !AND(part.in));

    case 'halfAdder': return {sum:((a||b) && !(a&&b)), carry:a&&b};

    case 'fullAdder':
      let trues = [a,b,c].filter(x=>x).length; // count true values
      return {sum:((trues%2)==1), carry:(trues>=2)};

    case 'gatedDlatch':
      D = state.parts[partID+'_D']?.state;
      E = state.parts[partID+'_E']?.state;
      if (E) return {Q:D, QQ:!D};
      return part.state;
      
    case 'upDownGDlatch':
      D = state.parts[partID+'_D']?.state;
      E = state.parts[partID+'_E']?.state;
      if (E) return {Q:D};
      return part.state;
      
    case 'nibble':
      // if Clk goes to 1, then update outputs
      oldClk = part.state.Clk;
      newClk = state.parts[partID+'_Clk'].state;
      if (newClk && !oldClk) {
	// clock went up, update
	[1,2,4,8].forEach(x=> newState[`o${x}`] = state.parts[partID+`_i${x}`].state );
	newState.Clk=true;
	return newState;
      }
      return {...part.state, Clk:newClk};
      
    case 'flipD':
    case 'flipDRL':
      // if Clk goes to 1, then update Q and QQ to reflect D
      oldClk = part.state.Clk;
      newClk = state.parts[partID+'_Clk'].state;
      if (newClk && !oldClk) {
	// clock went up, change Q and QQ
	D = state.parts[partID+'_D']?.state;
	return {Clk:true, Q:D, QQ:!D};
      }
      return {...part.state, Clk:newClk};

    case 'flipBT':
      // if Clk goes to 1, then update Q (no QQ)
      oldClk = part.state.Clk;
      newClk = state.parts[partID+'_Clk'].state;
      if (newClk && !oldClk) {
	// clock went up, change Q 
	D = state.parts[partID+'_D']?.state;
	return {Clk:true, Q:D};
      }
      return {...part.state, Clk:newClk};

    case 'mux2':
      // just 2 inputs (A+B) and 1 signal (S0)
      // they get mapped to a,b,c
      if (c) {
	part.selected=1;
	return b;
      } else {
	part.selected=0;
	return a;
      }
      
    case 'mux':
      // return the state of the input specified by the signals
      // the signals are in part.sigs
      // join them to create a binary number
      // convert that to a decimal number
      // use that number as the index to select with input state to return
      let selected = parseInt(part.sigs.map(x=>state.parts[partID+'_'+x].state ? 1 : 0).join(''),2);
      part.selected = selected;
      return(state.parts[part.in[selected]].state)

      
    case 'dmux2': 
    case 'dmux4': return a;
      
    case 'decoder':
      // join the inputs to create a binary number
      // convert that to a decimal number
      // use that number as the index to select the output
      let output = parseInt(part.ins.map(x=>state.parts[x].state ? 1 : 0).join(''),2);
      newState = {};
      Object.keys(part.outs).forEach((x,indx)=> newState[x] = (indx===output));
      return(newState);

      
    case 'hex2bcd':
      let inputs =  part.ins.map(x=>state.parts[partID+'_'+x].state ? 1 : 0);
      input = parseInt(inputs.join(''),2) * 2; // multiply by two to indicate left-shift
      if (input<10) {
	// Simply pass the values. Have to convert nums to booleans with !!
	return({outC:!!inputs[0], out8:!!inputs[1], out4:!!inputs[2], out2:!!inputs[3]});
      };
      switch (input) {
      case 10: return({outC:true, out8:false, out4:false, out2:false});
      case 12: return({outC:true, out8:false, out4:false, out2:true});
      case 14: return({outC:true, out8:false, out4:true, out2:false});
      case 16: return({outC:true, out8:false, out4:true, out2:true});
      case 18: return({outC:true, out8:true, out4:false, out2:false});
      }
      return({});

      
    case 'encoder8x3':
      // return value of selected input
      let decimal =  part.in.map(x=>state.parts[x].state).indexOf(true);
      // convert decimal to bin
      // split bin, 1s are true
      let outs  = decimal.toString(2).split('').map(x=>x==='1');
      while (outs.length<3) {
	outs.unshift(false); // pad short bit strings
      }
      // the MSB is the first bit
      return {selected:decimal, o4:outs[0], o2:outs[1], o1:outs[2]};

      
    case 'hex7segment':
      // convert inputs into binary number and convert that into hex string
      return parseInt(part.in.map(x => (state.parts[x].state ? '1' : '0')).join('') ,2).toString(16);
      
    case 'parent':
      selected = state.parts[part.parent].state[part.property];
      part.selected = selected;
      return state.parts[part.parent].state[part.property];
      
    default:  return OR(part.in);
      
    }
  }

  
  function updateParts(parts=[]) {
    // go through list of parts and update states
    // if states change, then make new list of parts to update
    // update new list of parts
    let newList = [];
    parts = [...new Set(parts)]; // eliminate duplicates
    parts.forEach(partID => {
      console.log(partID);
      let part = state.parts[partID];
      if (typeof part !== 'object') {
	alert('trouble with ' +partID +' in reducer, line 185');
	return null;
      }
      let newState = calculateState(part,partID);
      
      if ((part.type==='halfAdder') || (part.type==='fullAdder')) {
	if (newState.sum   !== part.state.sum)   newList.push(partID+'_sum');
	if (newState.carry !== part.state.carry) newList.push(partID+'_carry');
	part.state = newState;
      }
	
      if (part.type && (part.type.startsWith('flip') || part.type.endsWith('latch'))) {
	if (newState.Q  !== part.state.Q)  newList.push(partID+'_Q');
	if (newState.QQ !== part.state.QQ) newList.push(partID+'_QQ');
	part.state = newState;
      }
	
      if (part.type==='encoder8x3') {
	if (newState.o1  !== part.state.o1) newList.push(partID+'_o1');
	if (newState.o2  !== part.state.o2) newList.push(partID+'_o2');
	if (newState.o4  !== part.state.o4) newList.push(partID+'_o4');
	part.state = newState;
      }

      if (part.type && part.type.endsWith('eypad')) { // matches 'keypad' and 'tempKeypad'
	if (newState.o1  !== part.state.o1) newList.push(partID+'_o1');
	if (newState.o2  !== part.state.o2) newList.push(partID+'_o2');
	if (newState.o4  !== part.state.o4) newList.push(partID+'_o4');
	if (newState.o8  !== part.state.o8) newList.push(partID+'_o8');
	part.state = newState;
      }

      if ((part.type==='decoder') || (part.type==='hex2bcd') || (part.type==='nibble')) {
	Object.entries(newState).forEach(([output, newOutputState]) => {
	  if (part.state[output] !== newOutputState) newList.push(partID+'_'+output);
	})
	part.state = newState;
      }
      
      if (part.type && part.type.startsWith('dmux')) {
	part.state = newState;
	let selected = parseInt(part.sigs.map(x=>state.parts[partID+'_'+x].state ? 1 : 0).join(''),2);
	if (selected !== part.selected) {
	  // selection has changed; falsify current selection & update outputs
	  let oldOutput = partID+'_o'+part.selected;
	  state.parts[oldOutput].state = false;
	  newList = newList.concat(state.parts[oldOutput].out);
	}
	part.selected = selected;
	let output = partID+'_o'+selected;
	state.parts[output].state = newState;
	newList = newList.concat(state.parts[output].out);
      }
      
      if (part.state !== newState) {
        part.state = newState;
        newList = newList.concat(part.out);
      }
      
    });
    //confirm('Proceed?');
    try {
      if (newList.length>0) updateParts(newList);
    } catch (error) {
      alert('error with ' +newList +' at reducer.212, line 248');
    }
  }

  
  let part=null;
  switch (action.type) {
    
  case 'pressButton':
    part = state.parts[action.partID];
    part.state=action.state;
    updateParts(part.out);
    break;

    
  case 'pressKeypad':
    part = state.parts[action.partID];

    // convert decimal to bin
    // split bin, 1s are true
    let outs  = action.value.toString(2).split('').map(x=>x==='1');
    while (outs.length<4) {
      outs.unshift(false); // pad short bit strings
    }
    // the MSB is the first bit
    part.state = {selected:action.value, o8:outs[0], o4:outs[1], o2:outs[2], o1:outs[3], e:true};
    
    
    // update the prongs
    updateParts([1,2,4,8].map(x=>`${action.partID}_o${x}`));

    break;

    
  case 'pressTempKeypad':
    part = state.parts[action.partID];

    if (action.state) {
      // convert decimal to bin
      // split bin, 1s are true
      let outs  = action.value.toString(2).split('').map(x=>x==='1');
      while (outs.length<4) {
	outs.unshift(false); // pad short bit strings
      }
      // the MSB is the first bit
      part.state = {selected:action.value, o8:outs[0], o4:outs[1], o2:outs[2], o1:outs[3], e:true};

    } else {
      part.state = {selected:null, o8:false, o4:false, o2:false, o1:false, e:false};
    }
    
    // update the prongs
    updateParts([1,2,4,8].map(x=>`${action.partID}_o${x}`));

    // update E
    updateParts([action.partID +'_e']);
    
    break;

  case 'selectButton':
    let selector = state.parts[action.selectorID];
    // turn off the old selection
    if (selector.selected) {
      state.parts[selector.selected].state=false;
      updateParts(state.parts[selector.selected].out);
    }
    // turn on the new
    selector.selected=action.partID;
    state.parts[action.partID].state=true;
    updateParts(state.parts[action.partID].out);
    break;
  }

  
  //console.log(state);
  
  return state;
}

export default reducer;

export const halfSub = {
  buttonAxor1:    { type:'wire', state:false, out:['xor1'],       d:'M75,60 h188'  },
  buttonBand1:    { type:'wire', state:false, out:['and1'],       d:'M75,240 h185' },
  buttonAnot1:    { type:'wire', state:false, out:['not1'],       d:'M75,60 l105,150' },
  not1and1:       { type:'wire', state:true, out:['and1'],       d:'M225,210 h35' }, 
  buttonBxor1:    { type:'wire', state:false, out:['xor1'],       d:'M75,240 l188,-150' },
  xor1difference: { type:'wire', state:false, out:['difference'], d:'M340,75 h125' },
  and1borrow:     { type:'wire', state:false, out:['borrow'],     d:'M340,225 h125' },

  buttonA: { type:'button', label:'A', cx:50, cy:60, state:false, out:['buttonAxor1','buttonAnot1'] },
  buttonB: { type:'button', label:'B', cx:50, cy:240, state:false, out:['buttonBand1', 'buttonBxor1'] },

  xor1: { type:'xor', cx:300, cy:75,  state:false, out:['xor1difference'] },
  not1: { type:'not', cx:200, cy:210, state:true,  out:['not1and1'], transform:'scale(.5)' },
  and1: { type:'and', cx:300, cy:225, state:false, out:['and1borrow'] },

  difference: { type:'light',  cx:500, cy:75,  state:false, out:[], transform:'scale(.7)', label:'Difference',  },
  borrow:     { type:'light',  cx:500, cy:225, state:false, out:[], transform:'scale(.7)', label:'Borrow', },
};

export const fullSub = {
  buttonAxor1: { type:'wire', d:'M75,150 h185',      out:['xor1'] }, 
  buttonAnot1: { type:'wire', d:'M75,150 l105,210',  out:['not1'] },
  not1and1:    { type:'wire', d:'M220,360 h40',      out:['and1'], state:true },
  buttonBand1: { type:'wire', d:'M75,400 h185',      out:['and1'] },
  buttonBxor1: { type:'wire', d:'M75,400 l187,-210', out:['xor1'] },
  buttonCxor2: { type:'wire', d:'M500,100 v25 h60',  out:['xor2'] },
  buttonCand2: { type:'wire', d:'M500,100 v150 h60', out:['and2'] },
  xor1xor2:    { type:'wire', d:'M340,175 h220',     out:['xor2'] },
  xor1not2:    { type:'wire', d:'M340,175 l110,125', out:['not2'] },
  not2and2:    { type:'wire', d:'M490,300 h70',      out:['and2'], state:true },
  xor2diff:    { type:'wire', d:'M640,150 h310',     out:['diff'] },
  and1or1:     { type:'wire', d:'M340,375 h430',     out:['or1'] },
  and2or1:     { type:'wire', d:'M640,275 l140,60',  out:['or1'] },
  or1borrow:   { type:'wire', d:'M840,350 h110',     out:['borrowOut'] },

  buttonA:     { type:'button', label:'A', cx:50, cy:150, out:['buttonAxor1', 'buttonAnot1'] },
  buttonB:     { type:'button', label:'B', cx:50, cy:400, out:['buttonBand1', 'buttonBxor1'] },
  buttonC:     { type:'button', cx:500, cy:50, r:50, out:['buttonCxor2', 'buttonCand2'], label:'Borrow In' },
  not1:        { type:'not',    cx:200, cy:360, state:true, out:['not1and1'], transform:'scale(.5)' },

  node1:       { type:'node',   cx:500, cy:125 },

  xor1:     { type:'xor',    cx:300, cy:175, out:['xor1xor2', 'xor1not2'] },
  not2:     { type:'not',    cx:470, cy:300, state:true, out:['not2and2'], transform:'scale(.5)' },
  
  xor2:     { type:'xor',    cx:600, cy:150, out:['xor2diff'] },
  
  and1:      { type:'and',    cx:300, cy:375, out:['and1or1'] },
  
  and2:      { type:'and',    cx:600, cy:275, out:['and2or1'] },
  or1:       { type:'or',     cx:800, cy:350, out:['or1borrow'] },

  diff:       { type:'light',  cx:1000, cy:150, label:'Difference' },
  borrowOut:  { type:'light',  cx:1000, cy:350, label:'Borrow Out' },
};

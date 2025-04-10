const BCDadder = {

  full1sevenD: {type:'wire', d:'m550,450 v-278 h-96'},
  full2hex2in: {type:'wire', d:'m400,450 v-35 h-60 v-35'},
  full4hex4in: {type:'wire', d:'m250,450 v-25 h60 v-45'},
  full8hex8in: {type:'wire', d:'m100,450 v-35 h160 v-35'},

  hex2seven1C: {type:'wire', d:'m330,280 v-30 h105 v-80'},
  hex2seven1B: {type:'wire', d:'m290,280 v-50 h125 v-60'},
  hex2seven1A: {type:'wire', d:'m250,280 v-70 h145 v-40'},
  hex2seven10D: {type:'wire', d:'m180,325 h-50 v-135 h150 v-20'},

  carry1Full2:   {type:'wire', d:'m500,500 h-50'},
  carry2Full4:   {type:'wire', d:'m350,500 h-50'},
  carry4Full8:   {type:'wire', d:'m200,500 h-50'},
  carry8hex16in: {type:'wire', d:'m50,500 h-20 v-100 h190 v-20'},

  keypadAfull8: {type:'wire', d:'m145,630 h-70 v-80'},
  keypadAfull4: {type:'wire', d:'m165,630 v-30 h60 v-50'},
  keypadAfull2: {type:'wire', d:'m185,630 v-20 h190 v-60'},
  keypadAfull1: {type:'wire', d:'m205,630 v-10 h320 v-70'},

  keypadBfull1: {type:'wire', d:'m505,630 h70 v-80'},
  keypadBfull2: {type:'wire', d:'m485,630 v-70 h-60 v-10'},
  keypadBfull4: {type:'wire', d:'m465,630 v-60 h-190 v-20'},
  keypadBfull8: {type:'wire', d:'m445,630 v-50 h-320 v-30'},
  
  seven10: {type:'component hex7segment', cx:250, cy:100, ins:'a b c d', state:'0'},
  seven1:  {type:'component hex7segment', cx:425, cy:100, ins:'a b c d', state:'0'},

  hex2bcd: {type:'component hex2bcd', cx:280, cy:330,
	    ins:'16in 8in 4in 2in',
	    outs:{outC:'hex2seven10D seven10_d', out8:'hex2seven1A seven1_a', out4:'hex2seven1B seven1_b', out2:'hex2seven1C seven1_c'} },
  
  full1: {type:'component fullAdder', cx:550, cy:500, outs:{sum:'full1sevenD seven1_d', carry:'carry1Full2 full2'}},
  full2: {type:'component fullAdder', cx:400, cy:500, outs:{sum:'full2hex2in hex2bcd_2in', carry:'carry2Full4 full4'}},
  full4: {type:'component fullAdder', cx:250, cy:500, outs:{sum:'full4hex4in hex2bcd_4in', carry:'carry4Full8 full8'}},
  full8: {type:'component fullAdder', cx:100, cy:500, outs:{sum:'full8hex8in hex2bcd_8in', carry:'carry8hex16in hex2bcd_16in'}},

  keypadA:   {type:'component keypad', cx:175, cy:700, outs:{o8:'keypadAfull8 full8', o4:'keypadAfull4 full4', o2:'keypadAfull2 full2', o1:'keypadAfull1 full1'} },
  keypadB:   {type:'component keypad', cx:475, cy:700, outs:{o8:'keypadBfull8 full8', o4:'keypadBfull4 full4', o2:'keypadBfull2 full2', o1:'keypadBfull1 full1'} },

  A:  {type:'raw', text: '<text x="168" y="800" textAnchor="middle" alignmentBaseline="middle">A</text>' },
  B:  {type:'raw', text: '<text x="468" y="800" textAnchor="middle" alignmentBaseline="middle">B</text>' },
  
}

const chainedAdders = {

  full8sevenA: {type:'wire', d:'m100,250 v-78 h196'},
  full4sevenB: {type:'wire', d:'m250,250 v-40 h65 v-40'},
  full2sevenC: {type:'wire', d:'m400,250 v-40 h-65 v-40'},
  full1sevenD: {type:'wire', d:'m550,250 v-78 h-196'},

  carry1Full2: {type:'wire', d:'m500,300 h-50'},
  carry2Full4: {type:'wire', d:'m350,300 h-50'},
  carry4Full8: {type:'wire', d:'m200,300 h-50'},

  keypadAfull8: {type:'wire', d:'m145,430 h-70 v-80'},
  keypadAfull4: {type:'wire', d:'m165,430 v-30 h60 v-50'},
  keypadAfull2: {type:'wire', d:'m185,430 v-20 h190 v-60'},
  keypadAfull1: {type:'wire', d:'m205,430 v-10 h320 v-70'},

  keypadBfull1: {type:'wire', d:'m505,430 h70 v-80'},
  keypadBfull2: {type:'wire', d:'m485,430 v-70 h-60 v-10'},
  keypadBfull4: {type:'wire', d:'m465,430 v-60 h-190 v-20'},
  keypadBfull8: {type:'wire', d:'m445,430 v-50 h-320 v-30'},
  
  seven: {type:'component hex7segment', cx:325, cy:100, ins:'a b c d', state:'0'},
  
  full1: {type:'component fullAdder', cx:550, cy:300, outs:{sum:'full1sevenD seven_d', carry:'carry1Full2 full2'}},
  full2: {type:'component fullAdder', cx:400, cy:300, outs:{sum:'full2sevenC seven_c', carry:'carry2Full4 full4'}},
  full4: {type:'component fullAdder', cx:250, cy:300, outs:{sum:'full4sevenB seven_b', carry:'carry4Full8 full8'}},
  full8: {type:'component fullAdder', cx:100, cy:300, outs:{sum:'full8sevenA seven_a', carry:''}},

  keypadA:   {type:'component keypad', cx:175, cy:500, outs:{o8:'keypadAfull8 full8', o4:'keypadAfull4 full4', o2:'keypadAfull2 full2', o1:'keypadAfull1 full1'} },
  keypadB:   {type:'component keypad', cx:475, cy:500, outs:{o8:'keypadBfull8 full8', o4:'keypadBfull4 full4', o2:'keypadBfull2 full2', o1:'keypadBfull1 full1'} },

  A:  {type:'raw', text: '<text x="168" y="600" textAnchor="middle" alignmentBaseline="middle">A</text>' },
  B:  {type:'raw', text: '<text x="468" y="600" textAnchor="middle" alignmentBaseline="middle">B</text>' },
  
}


const halfAdder = {
  buttonAxor1: { type:'wire', d:'M75,60  h188',      state:false, out:['xor1'] },
  buttonAand1: { type:'wire', d:'M75,60 l200,150',   state:false, out:['and1'] },
  buttonBand1: { type:'wire', d:'M75,240 h200',      state:false, out:['and1'] },
  buttonBxor1: { type:'wire', d:'M75,240 l188,-150', state:false, out:['xor1'] },
  xor1light1:  { type:'wire', d:'M340,75  h130',     state:false, out:['light1'] },
  and1light2:       { type:'wire', d:'M340,225 h130',     state:false, out:['light2'] },
  buttonA: { type:'button', label:'A', cx:50, cy:60, state:false, out:['buttonAxor1', 'buttonAand1'] },
  buttonB: { type:'button', label:'B', cx:50, cy:240, state:false, out:['buttonBand1', 'buttonBxor1'] },
  xor1:    { type:'xor',    cx:300, cy:75, state:false, out:['xor1light1'] },
  light1:  { type:'light',  label:'Sum', cx:500, cy:75, state:false, transform:'scale(.6)' },
  and1:    { type:'and',    cx:300, cy:225, state:false, out:['and1light2'] },
  light2:  { type:'light',  label:'Carryover', cx:500, cy:225, state:false, transform:'scale(.6)' },
};


const fullAdder = {
  buttonAxor1: { type:'wire', d:'M75,150 h185',      state:false, out:['xor1'] },
  buttonAand1: { type:'wire', d:'M75,150 l200,230',  state:false, out:['and1'] },
  buttonBand1: { type:'wire', d:'M75,400 h200',      state:false, out:['and1'] },
  buttonBxor1: { type:'wire', d:'M75,400 l188,-210', state:false, out:['xor1'] },
  buttonCxor2: { type:'wire', d:'M425,75 l138,60',   state:false, out:['xor2'] },
  buttonCand2: { type:'wire', d:'M400,75 l160,185',  state:false, out:['and2'] },
  xor1xor2:    { type:'wire', d:'M340,175 h220',     state:false, out:['xor2'] },
  xor1and2:    { type:'wire', d:'M340,175 l220,125', state:false, out:['and2'] },
  xor2sum:     { type:'wire', d:'M640,150 h310',     state:false, out:['sum'] },
  and1or1:     { type:'wire', d:'M340,375 h430',     state:false, out:['or1'] },
  and2or1:     { type:'wire', d:'M640,275 l135,60',  state:false, out:['or1'] },
  or1carry:    { type:'wire', d:'M840,350 h110',     state:false, out:['carryover'] },

  buttonA: { type:'button', cx:50,  cy:150, state:false, out:['buttonAxor1', 'buttonAand1'], label:'A' },
  buttonB: { type:'button', cx:50,  cy:400, state:false, out:['buttonBand1', 'buttonBxor1'], label:'B' },
  buttonC: { type:'button', cx:400, cy:75,  state:false, out:['buttonCxor2', 'buttonCand2'], label:'C' },

  xor1: { type:'xor',   cx:300,  cy:175, state:false, out:['xor1xor2', 'xor1and2'] },
  xor2: { type:'xor',   cx:600,  cy:150, state:false, out:['xor2sum'] },
  sum:  { type:'light', cx:1000, cy:150, state:false, out:[], label:'Sum' },
  
  and1:      { type:'and',    cx:300, cy:375, state:false, out:['and1or1'] },
  and2:      { type:'and',    cx:600, cy:275, state:false, out:['and2or1'] },
  or1:       { type:'or',     cx:800, cy:350, state:false, out:['or1carry'] },
  carryover: { type:'light',  cx:1000, cy:350, state:false, label:'Carryover' },
};


const halfComponent = {
  buttonAhalf1: {type:'wire', d:'m50,100 h50'},
  buttonBhalf1: {type:'wire', d:'m50,200 h50'},

  half1sum:   {type:'wire', d:'m200,100 h50'},
  half1carry: {type:'wire', d:'m200,200 h50'},
  
  buttonA: {type:'button', cx:50, cy:100, label:'A', out:'buttonAhalf1 half1'},
  buttonB: {type:'button', cx:50, cy:200, label:'B', out:'buttonBhalf1 half1'},
  
  half1: {type:'component halfAdder', cx:150, cy:150, outs:{sum:'half1sum sum', carry:'half1carry carry'}},

  sum:   {type:'light', cx:250, cy:100, transform:'scale(.5)'},
  carry: {type:'light', cx:250, cy:200, transform:'scale(.5)'},
  
};


const twoHalfComponents = {
  buttonChalf2: {type:'wire', d:'m50,100 h250'},
  buttonAhalf1: {type:'wire', d:'m50,200 h100'},
  buttonBhalf1: {type:'wire', d:'m50,300 h100'},

  half2sum:   {type:'wire', d:'m400,100 h200'},
  half2carry: {type:'wire', d:'m400,200 l100 75'},
  half1half2: {type:'wire', d:'m250,200 h50'},
  half1carry: {type:'wire', d:'m250,300 h230'},
  or1carry:   {type:'wire', d:'m500,275 h100'},
  
  buttonA: {type:'button', cx:50, cy:200, label:'A', out:'half1'},
  buttonB: {type:'button', cx:50, cy:300, label:'B', out:'half1'},
  buttonC: {type:'button', cx:50, cy:100, label:'C', out:'buttonChalf2 half2'},

  half1: {type:'component halfAdder', cx:200, cy:250, outs:{sum:'half1half2 half2', carry:'half1carry or1'}},
  half2: {type:'component halfAdder', cx:350, cy:150, outs:{sum:'half2sum sum', carry:'half2carry or1'}},

  or1: {type:'or', cx:500, cy:275, out:'or1carry carry'},

  sum:   {type:'light', cx:625, cy:100, transform:'scale(.5)'},
  carry: {type:'light', cx:625, cy:275, transform:'scale(.5)'},
  
};


const fullComponent = {
  buttonAfull1: {type:'wire', d:'m175,250, v-50'},
  buttonBfull1: {type:'wire', d:'m225,250, v-50'},
  buttonCfull1: {type:'wire', d:'m350,150, h-100'},

  full1sum:   {type:'wire', d:'m200,50, v50'},
  full1carry: {type:'wire', d:'m50,150, h100'},

  buttonA: {type:'button', cx:175, cy:250, label:'A', transform:'scale(.6)', out:'buttonAfull1 full1'},
  buttonB: {type:'button', cx:225, cy:250, label:'B', transform:'scale(.6)', out:'buttonBfull1 full1'},
  buttonC: {type:'button', cx:350, cy:150, label:'C', transform:'scale(.6)', out:'buttonCfull1 full1'},
  
  full1: {type:'component fullAdder', cx:200, cy:150, outs:{sum:'full1sum sum', carry:'full1carry carry'}},

  sum:   {type:'light', cx:200, cy:50, transform:'scale(.3)'},
  carry: {type:'light', cx:50, cy:150, transform:'scale(.3)'},
};

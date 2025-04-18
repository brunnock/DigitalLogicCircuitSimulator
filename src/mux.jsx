import {sub} from './common.js';

export const muxComp4x1 = {
  
  buttonAmux1:  { type:'wire', d:'M25,25 l100,20' },
  buttonBmux1:  { type:'wire', d:'M25,55 l100,10' },
  buttonCmux1:  { type:'wire', d:'M25,85 l100,0' },
  buttonDmux1:  { type:'wire', d:'M25,115 l100,-10' },

  buttonS0mux1:  { type:'wire', d:'M135,160 v-50' },
  buttonS1mux1:  { type:'wire', d:'M165,160 v-65' },

  mux1light1:  { type:'wire', d:'M175,75 h60' },
  
  buttonA: { type:'button', label:'A', cx:25, cy:25, out:'mux1_A buttonAmux1', transform:'scale(.5)' },
  buttonB: { type:'button', label:'B', cx:25, cy:55, out:'mux1_B buttonBmux1', transform:'scale(.5)' },
  buttonC: { type:'button', label:'C', cx:25, cy:85, out:'mux1_C buttonCmux1', transform:'scale(.5)' },
  buttonD: { type:'button', label:'D', cx:25, cy:115, out:'mux1_D buttonDmux1', transform:'scale(.5)' },

  mux1: {type:'component mux', cx:150, cy:75, ins:'A B C D', sigs:'s1 s0', out:'light1 mux1light1', selected:0},

  s0: { type:'button', label:'S'+sub(0), cx:135, cy:160, out:'mux1_s0 buttonS0mux1', transform:'scale(.5)' },
  s1: { type:'button', label:'S'+sub(1), cx:165, cy:160, out:'mux1_s1 buttonS1mux1', transform:'scale(.5)' },

  light1:  { type:'light', cx:250, cy:75, transform:'scale(.3)' },
  
}

export const muxChain = {
  buttonAmux1: { type:'wire', d:'M25,30 l50,10' },
  buttonBmux1: { type:'wire', d:'M25,60 h50' },
  s0mux1:      { type:'wire', d:'M80,165 v-100' },
  s0mux2:      { type:'wire', d:'M80,165 h30 v-50' },
  mux1mux3:    { type:'wire', d:'M80,40 l100,50' },

  buttonCmux2: { type:'wire', d:'M25,90 l100,10' },
  buttonDmux2: { type:'wire', d:'M25,120 h100' },

  mux2mux3:    { type:'wire', d:'M120,110 h50' },

  s1mux2:      { type:'wire', d:'M180,165 v-50' },
  mux3light1:  { type:'wire', d:'M170,100 h70' },

  buttonA: { type:'button', label:'A', cx:25, cy:30, out:'mux1_A buttonAmux1', transform:'scale(.5)' },
  buttonB: { type:'button', label:'B', cx:25, cy:60, out:'mux1_B buttonBmux1', transform:'scale(.5)' },

  buttonC: { type:'button', label:'C', cx:25, cy:90, out:'mux2_A buttonCmux2', transform:'scale(.5)' },
  buttonD: { type:'button', label:'D', cx:25, cy:120, out:'mux2_B buttonDmux2', transform:'scale(.5)' },

  s0: { type:'button', label:'S'+sub(0), cx:80, cy:165, out:'mux1_s0 mux2_s0 s0mux1 s0mux2', transform:'scale(.5)' },
  s1: { type:'button', label:'S'+sub(1), cx:180, cy:165, out:'mux3_s0 s1mux2', transform:'scale(.5)' },

  mux1: {type:'component mux2', cx:70, cy:50,  ins:'A B', sigs:'s0', out:'mux3_A mux1mux3'},
  mux2: {type:'component mux2', cx:100, cy:110, ins:'A B', sigs:'s0', out:'mux3_B mux2mux3'},
  mux3: {type:'component mux2', cx:170, cy:100, ins:'A B', sigs:'s0', out:'light1 mux3light1'},

  light1:  { type:'light', cx:250, cy:100, transform:'scale(.3)' },
}



export const mux2x1Component = {
  buttonAmux1:  { type:'wire', d:'M25,30 l80,10' },
  buttonBmux1:  { type:'wire', d:'M25,60 h80' },

  s0mux1: { type:'wire', d:'M110,100 v-30' },

  mux1light1:  { type:'wire', d:'M120,50 h80' },

  buttonA: { type:'button', label:'A', cx:25, cy:30, out:'buttonAmux1 mux1_A', transform:'scale(.5)' },
  buttonB: { type:'button', label:'B', cx:25, cy:60, out:'buttonBmux1 mux1_B', transform:'scale(.5)' },

  s0: { type:'button', label:'S'+sub(0), cx:110, cy:100, out:'s0mux1 mux1_s0', transform:'scale(.5)' },
  
  mux1: {type:'component mux2', cx:100, cy:50, ins:'A B', sigs:'s0', out:'mux1light1 light1', selected:0},

  light1:  { type:'light',  cx:200, cy:50,  transform:'scale(.3)' },
}



export const passBlock = {
  buttonAand1: { type:'wire', d:'M50,75   h120'  },
  passAnd1:    { type:'wire', d:'M50,125  h120'  },
  and1out:     { type:'wire', d:'M200,100 h120'  },

  buttonA: { type:'button', cx:50,  cy:75,   r:30, transform:'scale(.7)', out:'buttonAand1 and1', label:'A', },
  pass:    { type:'button', cx:50,  cy:125,  r:30, transform:'scale(.7)', out:'passAnd1 and1', label:'PASS',  },
  and1:    { type:'and',    cx:200, cy:100,  out:'out' },
  out:     { type:'light',  cx:350, cy:100,  transform:'scale(.7)', label:'Out', },
}


export const triBuffer = {
  A2buffer:   { type:'wire', d:'M50,60  h120'  },
  S2Buffer:   { type:'wire', d:'M190,170 v-100'  },
  buffer2out: { type:'wire', d:'M210,60 h120'  },

  A:       { type:'button', cx:50,  cy:60,   r:30, transform:'scale(.7)', out:'A2buffer buffer', label:'A', },
  S:       { type:'button', cx:190, cy:170,  r:30, transform:'scale(.7)', out:'S2Buffer buffer', label:'S',  },
  buffer:  { type:'buffer', cx:200, cy:60,  out:'buffer2out out' },
  out:     { type:'light',  cx:350, cy:60,  transform:'scale(.5)'},
}


export const mux2x1 = {
  buttonAand1:  { type:'wire', d:'M50,30   h160'  },
  buttonBand2:  { type:'wire', d:'M50,175  h160'  },
  buttonSnot1: { type:'wire', d:'M140,275 v-160'  },
  buttonSand2: { type:'wire', d:'M140,275 v-50 h70'  },

  not1and1:     { type:'wire', d:'M140,125 v-50 h70', state:true  },
  and1or1:      { type:'wire', d:'M250,50  h75  v50  h50'  },
  and2or1:      { type:'wire', d:'M250,200 h75  v-50 h50'  },
  or1out:       { type:'wire', d:'M400,125 h160'  },

  buttonA:  { type:'button', label:'A',   cx:50,  cy:30,  out:'buttonAand1 and1' },
  buttonB:  { type:'button', label:'B',   cx:50,  cy:175, out:'buttonBand2 and2' },
  buttonS: { type:'button', label:'S', cx:140, cy:275, out:'buttonSnot1 buttonSand2 not1 and2' },

  not1: { type:'not', cx:140, cy:125, state:true, out:'not1and1 and1', transform:'scale(.5) rotate(-90)' },
  and1: { type:'and', cx:250, cy:50,  out:'and1or1 or1' },
  and2: { type:'and', cx:250, cy:200, out:'and2or1 or1' },
  or1:  { type:'or',  cx:400, cy:125, out:'or1out out' },

  out:  { type:'light', cx:550, cy:125, transform:'scale(.7)', label:'Out', },
};


export const mux4x1 = {
  Aand1:  { type:'wire', d:'M50,30   h320'  },
  Band2:  { type:'wire', d:'M50,150  h320'  },
  Cand3:  { type:'wire', d:'M50,275  h320'  },
  Dand4:  { type:'wire', d:'M50,400  h320'  },

  S1and4: { type:'wire', d:'M325,625  v-175 h50'  },
  S1and3: { type:'wire', d:'M325,625  v-300 h50'  },
  S0and4: { type:'wire', d:'M250,625  v-200 h120'  },
  S0and2: { type:'wire', d:'M250,625  v-425 h120'  },

  S1not1: { type:'wire', d:'M325,625  v-50 h-225 v-30'  },
  S0not2: { type:'wire', d:'M250,625  h-75 v-100'  },

  not1and1: { type:'wire', state:true, d:'M100,525  v-470 h260'  },
  not1and2: { type:'wire', state:true, d:'M100,525  v-350 h260'  },

  not2and1: { type:'wire', state:true, d:'M175,525  v-450 h240'  },
  not2and3: { type:'wire', state:true, d:'M175,525  v-225 h240'  },

  and1or1:  { type:'wire', d:'M400,50  h100 v160 h100'  },
  and2or1:  { type:'wire', d:'M400,175 h70  v52  h120'  },
  and3or1:  { type:'wire', d:'M400,300 h70  v-52  h120'  },
  and4or1:  { type:'wire', d:'M400,425 h100 v-160 h100'  },

  or1out:   { type:'wire', d:'M600,240 h120'  },
  
  A: { type:'button', label:'A', cx:50,  cy:30,  out:'Aand1 and1' },
  B: { type:'button', label:'B', cx:50,  cy:150, out:'Band2 and2' },
  C: { type:'button', label:'C', cx:50,  cy:275, out:'Cand3 and3' },
  D: { type:'button', label:'D', cx:50,  cy:400, out:'Dand4 and4' },

  not1: { type:'not', state:true, cx:100, cy:525, out:'not1and1 and1 not1and2 and2', transform:'scale(.5) rotate(-90)' },
  not2: { type:'not', state:true, cx:175, cy:525, out:'not2and1 and1 not2and3 and3', transform:'scale(.5) rotate(-90)' },

  S0: { type:'button', label:'S0', cx:250, cy:625, out:'S0and4 and4 S0and2 and2 S0not2 not2' },
  S1: { type:'button', label:'S1', cx:325, cy:625, out:'S1and4 and4 S1and3 and3 S1not1 not1' },

  and1: { type:'and', cx:400, cy:50,  out:'and1or1 or1' },
  and2: { type:'and', cx:400, cy:175, out:'and2or1 or1' },
  and3: { type:'and', cx:400, cy:300, out:'and3or1 or1' },
  and4: { type:'and', cx:400, cy:425, out:'and4or1 or1' },

  or1:  { type:'or',  cx:600, cy:240, out:'or1out out' },

  out:  { type:'light', cx:750, cy:240, transform:'scale(.7)', label:'Out', },
};

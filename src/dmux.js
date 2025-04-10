import {sub} from './common.js';

export const dmux4comp = {

  input2dmux: {type:'wire', d:'m25,100 h50'},
  
  s0dmux:     {type:'wire', d:'m85,225 v-70'},
  s1dmux:     {type:'wire', d:'m115,225 v-60'},

  dmuxLight1: {type:'wire', d:'m175,55 h-50'},
  dmuxLight2: {type:'wire', d:'m175,85 h-50'},
  dmuxLight3: {type:'wire', d:'m175,115 h-50'},
  dmuxLight4: {type:'wire', d:'m175,145 h-50'},

  input: {type:'button', label:'I', cx:25,  cy:100, out:'input2dmux dmux',    transform:'scale(.5)'},

  dmux: {type:'component dmux4', cx:100, cy:100, sigs:'s0 s1', outs:{o0:'light1', o1:'light2', o2:'light3', o3:'light4'}},

  s1:     {type:'button', label:'S'+sub(1), cx:85,  cy:225, out:'s0dmux dmux_s0', transform:'scale(.5)'},
  s0:     {type:'button', label:'S'+sub(0), cx:115, cy:225, out:'s1dmux dmux_s1', transform:'scale(.5)'},
  
  light1: {type:'light', cx:175, cy:55, transform:'scale(.2)'},
  light2: {type:'light', cx:175, cy:85, transform:'scale(.2)'},
  light3: {type:'light', cx:175, cy:115, transform:'scale(.2)'},
  light4: {type:'light', cx:175, cy:145, transform:'scale(.2)'},
  
}


export const dmux2chain = {

  input2dmux1: {type:'wire', d:'m25,100 h50'},

  s0dmux1: {type:'wire', d:'m100,250 v-120'},
  s1dmux2dmux3: {type:'wire', d:'m200,250 v-200'},

  dmux1dmux2: {type:'wire', d:'m100,100 l100,-60'},
  dmux1dmux3: {type:'wire', d:'m100,105 l100,85'},

  dmux2light1: {type:'wire', d:'m200,45 h100'},
  dmux2light2: {type:'wire', d:'m200,75 h100'},
  dmux3light3: {type:'wire', d:'m200,155 h100'},
  dmux3light4: {type:'wire', d:'m200,185 h100'},

  input: {type:'button', label:'I', cx:25,  cy:100, out:'input2dmux1 dmux1',  transform:'scale(.5)'},

  dmux1: {type:'component dmux2', cx:100, cy:100, sigs:'s0', outs:{o0:'dmux1dmux2 dmux2', o1:'dmux1dmux3 dmux3'}},
  dmux2: {type:'component dmux2', cx:200, cy:60,  sigs:'s1', outs:{o0:'light1', o1:'light2'}},
  dmux3: {type:'component dmux2', cx:200, cy:170, sigs:'s1', outs:{o0:'light3', o1:'light4'}},

  s0:     {type:'button', label:'S'+sub(0), cx:100, cy:250, out:'s0dmux1 dmux1_s0', transform:'scale(.5)'},
  s1:     {type:'button', label:'S'+sub(1), cx:200, cy:250, out:'s1dmux2dmux3 dmux2_s1 dmux3_s1', transform:'scale(.5)'},
  
  light1: {type:'light', cx:300, cy:45,  transform:'scale(.2)'},
  light2: {type:'light', cx:300, cy:75,  transform:'scale(.2)'},
  light3: {type:'light', cx:300, cy:155, transform:'scale(.2)'},
  light4: {type:'light', cx:300, cy:185, transform:'scale(.2)'},
  
}


export const dmux2comp = {

  input2dmux1: {type:'wire', d:'m25,60 h50'},
  s2dmux1:     {type:'wire', d:'m100,135 v-50'},

  light1dmux1: {type:'wire', d:'m175,45 h-50'},
  light2dmux1: {type:'wire', d:'m175,75 h-50'},

  dmux1: {type:'component dmux2', cx:100, cy:60, sigs:'s0', outs:{o0:'light1dmux1 light1', o1:'light2dmux1 light2'}},

  input: {type:'button', label:'I', cx:25,  cy:60, out:'input2dmux1 dmux1',    transform:'scale(.5)'},
  s:     {type:'button', label:'S', cx:100, cy:135, out:'s2dmux1 dmux1_s0', transform:'scale(.5)'},
  
  light1: {type:'light', cx:175, cy:45, transform:'scale(.2)'},
  light2: {type:'light', cx:175, cy:75, transform:'scale(.2)'},
  
}


export const demux4 = {

  Aand1: {type:'wire', d:'m50,250 h175 v-125 h50' },
  Aand2: {type:'wire', d:'m50,250 h175 v-25 h50' },
  Aand3: {type:'wire', d:'m50,250 h175 v25  h50' },
  Aand4: {type:'wire', d:'m50,250 h175 v125  h50' },

  S0not1: {type:'wire', d:'m100,500 v-425 h100' },
  S0and2: {type:'wire', d:'m100,500 v-325 h160' },
  S0not4: {type:'wire', d:'m100,500 v-175 h100' },
  S0and4: {type:'wire', d:'m100,500 v-75 h160' },

  S1not2: {type:'wire', d:'m175,500 v-400 h20' },
  S1not3: {type:'wire', d:'m175,500 v-300 h20' },
  S1and3: {type:'wire', d:'m175,500 v-200 h100' },
  S1and4: {type:'wire', d:'m175,500 v-100 h100' },
  
  not1and1: {type:'wire', d:'m200,75 h60', state:true },
  not2and1: {type:'wire', d:'m200,100 h60', state:true },

  not3and2: {type:'wire', d:'m200,200 h60', state:true },
  not4and3: {type:'wire', d:'m200,325 h60', state:true },

  and1light1: {type:'wire', d:'m300,100 h130' },
  and2light2: {type:'wire', d:'m300,200 h130' },
  and3light3: {type:'wire', d:'m300,300 h130' },
  and4light4: {type:'wire', d:'m300,400 h130' },

  A: {type:'button', label:'A', cx:50,  cy:250, out:'Aand1 Aand2 Aand3 Aand4 and1 and2 and3 and4'},
  
  S0: {type:'button', label:'S'+sub(0), cx:100, cy:500, out:'S0not1 not1 S0and2 and2 S0not4 not4 S0and4 and4'},
  S1: {type:'button', label:'S'+sub(1), cx:175, cy:500, out:'S1not2 not2 S1not3 not3 S1and3 and3 S1and4 and4'},
  
  not1: {type:'not', cx:200, cy:75,  transform:'scale(.25)', state:true, out:'not1and1 and1'},
  not2: {type:'not', cx:200, cy:100, transform:'scale(.25)', state:true, out:'not2and1 and1'},
  not3: {type:'not', cx:200, cy:200, transform:'scale(.25)', state:true, out:'not3and2 and2'},
  not4: {type:'not', cx:200, cy:325, transform:'scale(.25)', state:true, out:'not4and3 and3'},

  and1: {type:'and', cx:300, cy:100, out:'and1light1 light1'},
  and2: {type:'and', cx:300, cy:200, out:'and2light2 light2'},
  and3: {type:'and', cx:300, cy:300, out:'and2light2 light3'},
  and4: {type:'and', cx:300, cy:400, out:'and2light2 light4'},

  light1:{type:'light', label:'O1', cx:450, cy:100, transform:'scale(.5)'},
  light2:{type:'light', label:'O2', cx:450, cy:200, transform:'scale(.5)'},
  light3:{type:'light', label:'O3', cx:450, cy:300, transform:'scale(.5)'},
  light4:{type:'light', label:'O4', cx:450, cy:400, transform:'scale(.5)'},
  
}

export const demux2 = {

  Aand1: {type:'wire', d:'m50,150 h175 v-25 h50' },
  Aand2: {type:'wire', d:'m50,150 h175 v25  h50' },

  Snot1: {type:'wire', d:'m150,275 v-200 h50' },
  Sand2: {type:'wire', d:'m150,275 v-50 h120' },

  not1and1: {type:'wire', d:'m200,75 h60' },

  and1light1: {type:'wire', d:'m300,100 h130' },
  and2light2: {type:'wire', d:'m300,200 h130' },

  A: {type:'button', label:'A', cx:50,  cy:150, out:'and1 and2 Aand1 Aand2'},
  S: {type:'button', label:'S', cx:150, cy:275, out:'not1 and2 Snot1 Sand2'},
  
  not1: {type:'not', cx:200, cy:75, transform:'scale(.5)', state:true, out:'not1and1 and1'},

  and1: {type:'and', cx:300, cy:100, out:'and1light1 light1'},
  and2: {type:'and', cx:300, cy:200, out:'and2light2 light2'},

  light1:{type:'light', label:'O1', cx:450, cy:100, transform:'scale(.5)'},
  light2:{type:'light', label:'O2', cx:450, cy:200, transform:'scale(.5)'},
  
}

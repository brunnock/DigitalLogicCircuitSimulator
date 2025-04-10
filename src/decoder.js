export const hex2bcd = {
  button2hex2bcd:  {type:'wire', d:'m207,225 v-60'},
  button4hex2bcd:  {type:'wire', d:'m172,225 v-60'},
  button8hex2bcd:  {type:'wire', d:'m137,225 v-60'},
  button16hex2bcd: {type:'wire', d:'m102,225 v-60'},

  hex2lightC: {type:'wire', d:'m15,115 h40'},
  hex2light8: {type:'wire', d:'m115,15 v60'},
  hex2light4: {type:'wire', d:'m155,15 v60'},
  hex2light2: {type:'wire', d:'m195,15 v60'},
  
  lightC: {type:'light', cx:15, cy:115, transform:'scale(.25)' },
  light8: {type:'light', cx:115, cy:15, transform:'scale(.25)' },
  light4: {type:'light', cx:155, cy:15, transform:'scale(.25)' },
  light2: {type:'light', cx:195, cy:15, transform:'scale(.25)' },
  
  hex2bcd: {type:'component hex2bcd', cx:150, cy:120,
	    ins:'16in 8in 4in 2in',
	    outs:{outC:'hex2lightC lightC', out8:'hex2light8 light8', out4:'hex2light4 light4', out2:'hex2light2 light2'} },

  button16: { type:'button', cx:102, cy:225, out:'button16hex2bcd hex2bcd_16in', transform:'scale(.5)' },
  button8:  { type:'button', cx:137, cy:225, out:'button8hex2bcd hex2bcd_8in',   transform:'scale(.5)' },
  button4:  { type:'button', cx:172, cy:225, out:'button4hex2bcd hex2bcd_4in',   transform:'scale(.5)' },
  button2:  { type:'button', cx:207, cy:225, out:'button2hex2bcd hex2bcd_2in',   transform:'scale(.5)' },
}

export const decoder2x4component = {
  Adecod1: { type:'wire', d:'m50,65 h100' },
  Bdecod1: { type:'wire', d:'m50,100 h100' },

  decod1q0: { type:'wire', d:'m150,45 h100', state:true },
  decod1q1: { type:'wire', d:'m150,70 h100' },
  decod1q2: { type:'wire', d:'m150,95 h100' },
  decod1q3: { type:'wire', d:'m150,120 h100' },

  A: { type:'button', cx:50, cy:65, out:'decod1_A Adecod1', transform:'scale(.5)' },
  B: { type:'button', cx:50, cy:100, out:'decod1_B Bdecod1', transform:'scale(.5)' },

  // reverse the inputs so A is the LSB 
  decod1: {type:'component decoder', size:'2x4', ins:'B A', outs:{q0:'q0 decod1q0', q1:'q1 decod1q1', q2:'q2 decod1q2', q3:'q3 decod1q3'}, state:{q0:true}, cx:150, cy:80 },

  q0:  { type:'light', cx:250, cy:45,  transform:'scale(.2)', state:true },
  q1:  { type:'light', cx:250, cy:70,  transform:'scale(.2)' },
  q2:  { type:'light', cx:250, cy:95,  transform:'scale(.2)' },
  q3:  { type:'light', cx:250, cy:120,  transform:'scale(.2)' },
  
}


export const decoder2x4 = {
  S2and3: { type:'wire', d:'M275,550  v-100 h100' },
  S2and2: { type:'wire', d:'M275,550  v-230 h100' },
  S1and3: { type:'wire', d:'M200,550  v-140 h160' },
  S1and1: { type:'wire', d:'M200,550  v-360 h160' },

  S2not1: { type:'wire', d:'M275,550  v-50 h-225 v-90' },
  S1not2: { type:'wire', d:'M200,550  h-75 v-130' },

  not1and0: { type:'wire', d:'M50,400  v-370 h310', state:true },
  not1and1: { type:'wire', d:'M50,400  v-240 h310', state:true },

  not2and0: { type:'wire', d:'M125,400  v-330 h240', state:true },
  not2and2: { type:'wire', d:'M125,400  v-120 h240', state:true },

  and1out0: { type:'wire', d:'M400,50   h150', state:true },
  and1out1: { type:'wire', d:'M400,175  h150' },
  and2out2: { type:'wire', d:'M400,300  h150' },
  and3out3: { type:'wire', d:'M400,425  h150' },
  
  not1: { type:'not', cx:50,  cy:400, state:true, out:'not1and0 and0 not1and1 and1', transform:'scale(.5) rotate(-90)' },
  not2: { type:'not', cx:125, cy:400, state:true, out:'not2and0 and0 not2and2 and2', transform:'scale(.5) rotate(-90)' },

  S1: { type:'button', label:'1', cx:200, cy:550, out:'S1and3 and3 S1and1 and1 S1not2 not2' },
  S2: { type:'button', label:'2', cx:275, cy:550, out:'S2and3 and3 S2and2 and2 S2not1 not1' },

  and0: { type:'and', cx:400, cy:50,  state:true, out:'and1out0 out0' },
  and1: { type:'and', cx:400, cy:175, out:'and1out1 out1' },
  and2: { type:'and', cx:400, cy:300, out:'and2out2 out2' },
  and3: { type:'and', cx:400, cy:425, out:'and3out3 out3' },

  out0:  { type:'light', cx:550, cy:50,  state:true, transform:'scale(.7)', label:'0', },
  out1:  { type:'light', cx:550, cy:175, transform:'scale(.7)', label:'1', },
  out2:  { type:'light', cx:550, cy:300, transform:'scale(.7)', label:'2', },
  out3:  { type:'light', cx:550, cy:425, transform:'scale(.7)', label:'3', },
};

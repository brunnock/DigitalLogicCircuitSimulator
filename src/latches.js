

const fourBitRegister = {
  e2latches: { type:'wire', d:'m100,200 h550'  },
  
  d8latch8: { type:'wire', d:'m100,250 v100'  },
  d4latch4: { type:'wire', d:'m250,250 v100'  },
  d2latch2: { type:'wire', d:'m400,250 v100'  },
  d1latch1: { type:'wire', d:'m550,250 v100'  },
  
  latch8light8: { type:'wire', d:'m100,50 v100'  },
  latch4light4: { type:'wire', d:'m250,50 v100'  },
  latch2light2: { type:'wire', d:'m400,50 v100'  },
  latch1light1: { type:'wire', d:'m550,50 v100'  },

  light8: { type:'light',  cx:100, cy:50, transform:'scale(.4)', },
  light4: { type:'light',  cx:250, cy:50, transform:'scale(.4)', },
  light2: { type:'light',  cx:400, cy:50, transform:'scale(.4)', },
  light1: { type:'light',  cx:550, cy:50, transform:'scale(.4)', },

  latch8: {type:'component upDownGDlatch', cx:100, cy:200, ins:'D E', outs:{Q:'latch8light8 light8'}},
  latch4: {type:'component upDownGDlatch', cx:250, cy:200, ins:'D E', outs:{Q:'latch4light4 light4'}},
  latch2: {type:'component upDownGDlatch', cx:400, cy:200, ins:'D E', outs:{Q:'latch2light2 light2'}},
  latch1: {type:'component upDownGDlatch', cx:550, cy:200, ins:'D E', outs:{Q:'latch1light1 light1'}},
  
  i8: { type:'button', label:'I'+sub(8), cx:100, cy:350, out:'d8latch8 latch8_D', transform:'scale(.8)' },
  i4: { type:'button', label:'I'+sub(4), cx:250, cy:350, out:'d4latch4 latch4_D', transform:'scale(.8)' },
  i2: { type:'button', label:'I'+sub(2), cx:400, cy:350, out:'d2latch2 latch2_D', transform:'scale(.8)' },
  i1: { type:'button', label:'I'+sub(1), cx:550, cy:350, out:'d1latch1 latch1_D', transform:'scale(.8)' },
  
  E:  { type:'tempButton', label:'E', cx:650, cy:200, out:'latch1_E, latch2_E, latch4_E, latch8_E e2latches', transform:'scale(.8)' },
}



const GDLatchComponent = {

  Dflip1: { type:'wire', d:'M50,75 h100'  },
  Eflip1: { type:'wire', d:'M50,130 h100' },

  flip1Qlight:  { type:'wire', d:'M250,75 h100' },
  flip1QQlight: { type:'wire', d:'M250,130 h100' },

  D:  { type:'button', label:'D', cx:50, cy:75, out:'Dflip1 flip1_D', transform:'scale(.8)' },
  E:  { type:'button', label:'E', cx:50, cy:130, out:'Eflip1 flip1_E', transform:'scale(.8)' },

  flip1: {type:'component gatedDlatch', cx:200, cy:100, ins:'D E', outs:{Q:'flip1Qlight Qlight', QQ:'flip1QQlight QQlight'}},

  Qlight:  { type:'light',  cx:350, cy:75, transform:'scale(.4)', },
  QQlight: { type:'light',  cx:350, cy:130, transform:'scale(.4)', },
  
}



const norLatch2 = {
  SetNor1:   { type:'wire', d:'M50,125 h150', out:['Nor1'] },
  ResetNor2: { type:'wire', d:'M50,225 l300,-100', out:['Nor2'] },

  Nor1Nor2:  { type:'wire', d:'M200,100 h150', out:['Nor2'], state:true },

  Nor2Nor1:  { type:'wire', d:'M380,125 h75 v-100 h-330 v50 h80', out:['Nor1'] },
  Nor2Q:     { type:'wire', d:'M400,125 h150', out:['Q'] },

  Set:   { type:'tempButton', label:'Set', cx:50, cy:125, r:35, out:['SetNor1'] },
  Reset: { type:'tempButton', label:'Reset', cx:50, cy:225, r:35, out:['ResetNor2', 'Nor2'] },

  Nor1:  { type:'nor', cx:200, cy:100, out:['Nor1Nor2'], state:true },
  Nor2:  { type:'nor', cx:350, cy:125, out:['Nor2Nor1', 'Nor2Q'] },

  Q:  { type:'light', label:'Q', cx:550, cy:125, transform:'scale(.6)' },
};

const andOrLatch = {
  SetOr1:    { type:'wire', d:'M50,125 h150', out:['Or1'] },
  Or1And1:   { type:'wire', d:'M200,100 h200', out:['And1'] },

  ResetNot1: { type:'wire', d:'M50,225 h150', out:['Not1'] },
  Not1And1:  { type:'wire', d:'M225,225 l200,-120', out:['And1'], state:true },

  And1Or1:   { type:'wire', d:'M400,125 h75 v-100 h-350 v50 h80', out:['Or1'] },
  And1Q:     { type:'wire', d:'M400,125 h150', out:['Q'] },

  Set:   { type:'tempButton', label:'Set', cx:50, cy:125, r:35, out:['SetOr1'] },
  Reset: { type:'tempButton', label:'Reset', cx:50, cy:225, r:35, out:['ResetNot1'] },

  Or1:   { type:'or', cx:200, cy:100, out:['Or1And1'] },
  Not1:  { type:'not', cx:200, cy:225, state:true, out:['Not1And1'], transform:'scale(.5)' },
  And1:  { type:'and', cx:400, cy:125, out:['And1Or1', 'And1Q'] },

  Q:  { type:'light', label:'Q', cx:550, cy:125, transform:'scale(.6)' },
};

const norLatch = {
  ResetNor1: { type:'wire', d:'M75,60  h215', out:['Nor1'] },
  SetNor2:   { type:'wire', d:'M75,240 h215', out:['Nor2'] },
  Nor1Q:     { type:'wire', d:'M340,75  h130', state:true, out:['Q'] },
  Nor2QQ:    { type:'wire', d:'M340,225 h130', out:['QQ'] },

  Nor1Nor2: { type:'wire', d:'M340,75 h5 v35 l-150,100 h130', state:true, out:['Nor2'] },
  Nor2Nor1: { type:'wire', d:'M340,225 h5 v-35 l-150,-100 h130', out:['Nor1'] },
  
  Reset: { type:'tempButton', label:'Reset', cx:50, cy:60, r:35, out:['ResetNor1'] },
  Set:   { type:'tempButton', label:'Set', cx:50, cy:240, r:35, out:['SetNor2'] },

  Nor1:    { type:'nor', cx:300, cy:75, state:true, out:['Nor1Q', 'Nor1Nor2'] },
  Nor2:    { type:'nor', cx:300, cy:225, out:['Nor2QQ', 'Nor2Nor1'] },

  Q:  { type:'light',  label:'Q', cx:500, cy:75, state:true, transform:'scale(.6)' },
  QQ: { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)'},
};

const SrNandLatch = {
  ResetNand1: { type:'wire', d:'M75,60  h215', state:true, out:['Nand1'] },
  SetNand2:   { type:'wire', d:'M75,240 h215', state:true, out:['Nand2'] },
  Nand1Q:     { type:'wire', d:'M340,75  h130', state:true, out:['Q'] },
  Nand2QQ:    { type:'wire', d:'M340,225 h130', out:['QQ'] },

  Nand1Nand2: { type:'wire',   d:'M340,75 h5 v35 l-150,100 h130', state:true, out:['Nand2'] },
  Nand2Nand1: { type:'wire',   d:'M340,225 h5 v-35 l-150,-100 h130', out:['Nand1'] },
  
  Reset: { type:'tempButton', label:'Reset', cx:50, cy:60, r:35, state:true, out:['ResetNand1'], complement:true},
  Set:   { type:'tempButton', label:'Set', cx:50, cy:240, r:35, state:true, out:['SetNand2'] , complement:true},

  Nand1:    { type:'nand',    cx:300, cy:75, state:true, out:['Nand1Q', 'Nand1Nand2'] },
  Nand2:    { type:'nand',    cx:300, cy:225, out:['Nand2QQ', 'Nand2Nand1'] },

  Q:  { type:'light',  label:'Q', cx:500, cy:75, state:true, transform:'scale(.6)' },
  QQ: { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)'},
};


const dNorLatch = {
  DataNor2: { type:'wire', d:'M75,240 h215', out:['Nor2'] },
  DataNot1: { type:'wire', d:'M50,240 v-190 h75', out:['Not1'] },
  Not1Nor1: { type:'wire', d:'M175,50 h100', state:true, out:['Nor1'] },

  Nor1Q:   { type:'wire', d:'M340,75  h130', out:['Q'] },
  Nor2QQ:  { type:'wire', d:'M340,225 h130', state:true, out:['QQ'] },

  Nor1Nor2: { type:'wire', d:'M340,75 h5 v35 l-150,100 h130', out:['Nor2'] },
  Nor2Nor1: { type:'wire', d:'M340,225 h5 v-35 l-150,-100 h130', state:true, out:['Nor1'] },
  
  Data:   { type:'button', label:'Data', cx:50, cy:240, r:35, out:['DataNor2','DataNot1'] },
  Not1: {type:'not', cx:150, cy:50, state:true, out:['Not1Nor1'], transform:'scale(.6)' },

  Nor1:    { type:'nor', cx:300, cy:75, out:['Nor1Q', 'Nor1Nor2'] },
  Nor2:    { type:'nor', cx:300, cy:225, state:true, out:['Nor2QQ', 'Nor2Nor1'] },

  Q:  { type:'light',  label:'Q', cx:500, cy:75, transform:'scale(.6)' },
  QQ: { type:'light',  label:Qcomp, cx:500, cy:225, state:true, transform:'scale(.6)'},
};


const dNandLatch = {
  DataNand2: { type:'wire', d:'M75,240 h215', out:['Nand2'] },
  DataNot1:  { type:'wire', d:'M50,240 v-190 h75', out:['Not1'] },
  Not1Nand1: { type:'wire', d:'M175,50 h100', out:['Nand1'] },

  Nand1Q:   { type:'wire', d:'M340,75  h130', out:['Q'] },
  Nand2QQ:  { type:'wire', d:'M340,225 h130', out:['QQ'] },

  Nand1Nand2: { type:'wire',   d:'M340,75 h5 v35 l-150,100 h130', out:['Nand2'] },
  Nand2Nand1: { type:'wire',   d:'M340,225 h5 v-35 l-150,-100 h130', out:['Nand1'] },
  
  Data:   { type:'button', label:'Data', cx:50, cy:240, r:35, out:['DataNand2','DataNot1']},

  Not1: {type:'not', cx:150, cy:50, out:['Not1Nand1'], transform:'scale(.6)' },
  
  Nand1:    { type:'nand',    cx:300, cy:75, out:['Nand1Q', 'Nand1Nand2'] },
  Nand2:    { type:'nand',    cx:300, cy:225, out:['Nand2QQ', 'Nand2Nand1'] },

  Q:   { type:'light',  label:'Q',   cx:500, cy:75, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)'},
};


const gatedSrNandLatch = {
  SetNand1:    { type:'wire', d:'M50,30 h130',  out:['Nand1'] },
  ResetNand2:  { type:'wire', d:'M50,270 h130', out:['Nand2'] },
  EnableNand1: { type:'wire', d:'M100,150 v-75 h60',  out:['Nand1'] },
  EnableNand2: { type:'wire', d:'M100,150 v75  h60',  out:['Nand2'] },

  Nand3Q:      { type:'wire', d:'M440,75  h130', out:['Q'] },
  Nand4QQ:     { type:'wire', d:'M440,225 h130', out:['QQ'], state:true },

  Nand1Nand3: { type:'wire',   d:'M200,50 h180',  out:['Nand3'], state:true },
  Nand2Nand4: { type:'wire',   d:'M200,250 h180', out:['Nand4'], state:true },
  Nand3Nand4: { type:'wire',   d:'M440,75 h5 v35 l-150,100 h130', out:['Nand4'] },
  Nand4Nand3: { type:'wire',   d:'M440,225 h5 v-35 l-150,-100 h130', out:['Nand3'], state:true },
  
  Set:    { type:'tempButton', label:'Set',    cx:50, cy:30,  r:35, out:['SetNand1'] , transform:'scale(.7)'},
  Enable: { type:'button',     label:'Enable', cx:100, cy:150, r:35, out:['EnableNand1','EnableNand2'] , transform:'scale(.7)'},
  Reset:  { type:'tempButton', label:'Reset',  cx:50, cy:270, r:35, out:['ResetNand2'], transform:'scale(.7)'},

  Nand1:    { type:'nand',    cx:200, cy:50,  state:true, out:['Nand1Nand3'] },
  Nand2:    { type:'nand',    cx:200, cy:250, state:true, out:['Nand2Nand4'] },
  Nand3:    { type:'nand',    cx:400, cy:75, out:['Nand3Q', 'Nand3Nand4'] },
  Nand4:    { type:'nand',    cx:400, cy:225, state:true, out:['Nand4QQ', 'Nand4Nand3'] },

  Q:   { type:'light',  label:'Q', cx:550, cy:75, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:550, cy:225, transform:'scale(.6)', state:true},
};


const gatedSrNorLatch = {
  ResetAnd1:   { type:'wire', d:'M50,30 h130',  out:['And1'] },
  SetAnd2:   { type:'wire', d:'M50,270 h130',  out:['And2'] },
  
  EnableAnd1: { type:'wire', d:'M100,150 v-75 h60', out:['And1'] },
  EnableAnd2: { type:'wire', d:'M100,150 v75 h60', out:['And2'] },

  Nor1Q:      { type:'wire', d:'M390,75  h100', out:['Q'] },
  Nor2QQ:     { type:'wire', d:'M390,225 h100', out:['QQ'], state:true },

  And1Nor1: { type:'wire', d:'M200,50 h150',  out:['Nor1'] },
  And2Nor2: { type:'wire', d:'M200,250 h150', out:['Nor2'] },
  Nor1Nor2: { type:'wire', d:'M390,75  h5 v35  l-130,100 h60', out:['Nor2'] },
  Nor2Nor1: { type:'wire', d:'M390,225 h5 v-35 l-130,-100 h60', out:['Nor1'], state:true },
  
  Reset:  { type:'tempButton', label:'Reset',  cx:50,  cy:30, r:35, out:['ResetAnd1'], transform:'scale(.7)'},
  Set:    { type:'tempButton', label:'Set',    cx:50,  cy:270, r:35, out:['SetAnd2'],   transform:'scale(.7)'},
  Enable: { type:'button', label:'Enable', cx:100, cy:150, r:35, out:['EnableAnd1', 'EnableAnd2'], transform:'scale(.7)'},


  And1: { type:'and', cx:200, cy:50,  out:['And1Nor1'] },
  And2: { type:'and', cx:200, cy:250, out:['And2Nor2'] },
  Nor1: { type:'nor', cx:350, cy:75,  out:['Nor1Q', 'Nor1Nor2'] },
  Nor2: { type:'nor', cx:350, cy:225, out:['Nor2QQ', 'Nor2Nor1'], state:true },

  Q:   { type:'light',  label:'Q', cx:500, cy:75, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)', state:true},
};



const dLatch1 = {
  DataNand1:   { type:'wire', d:'M50,30 h130',  out:['Nand1'] },
  DataNot1:    { type:'wire', d:'M50,30 v240 h30',   out:['Not1'] },
  Not1And2:    { type:'wire', d:'M120,270 h40',  state:true, out:['Nand2'] },
  EnableNand1: { type:'wire', d:'M100,150 v-75 h60', out:['Nand1'] },
  EnableNand2: { type:'wire', d:'M100,150 v75 h60', out:['Nand2'] },

  Nand3Q:      { type:'wire', d:'M390,75  h100', out:['Q'] },
  Nand4QQ:     { type:'wire', d:'M390,225 h100', out:['QQ'] },

  Nand1Nand3: { type:'wire', d:'M200,50 h180',  out:['Nand3'] },
  Nand2Nand4: { type:'wire', d:'M200,250 h180', out:['Nand4'] },
  Nand3Nand4: { type:'wire', d:'M390,75  h5 v35  l-130,100 h50', out:['Nand4'] },
  Nand4Nand3: { type:'wire', d:'M390,225 h5 v-35 l-130,-100 h50', out:['Nand3'] },
  
  Data:    { type:'button', label:'Data',    cx:50, cy:30,  r:35, out:['DataNand1','DataNot1'] , transform:'scale(.7)'},
  Enable:  { type:'button', label:'Enable',  cx:100, cy:150, r:35, out:['EnableNand1', 'EnableNand2'], transform:'scale(.7)'},

  Not1: {type:'not', cx:100, cy:270, state:true, out:['Not1And2'], transform:'scale(.5)'},

  Nand1: { type:'nand', cx:200, cy:50,  out:['Nand1Nand3'] },
  Nand2: { type:'nand', cx:200, cy:250, out:['Nand2Nand4'] },
  Nand3: { type:'nand', cx:350, cy:75,  out:['Nand3Q', 'Nand3Nand4'] },
  Nand4: { type:'nand', cx:350, cy:225, out:['Nand4QQ', 'Nand4Nand3'] },

  Q:   { type:'light',  label:'Q', cx:500, cy:75, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)'},
};


const dLatch2 = {
  DataNot1:    { type:'wire', d:'M50,270 v-240 h30',   out:['Not1'] },
  DataAnd2:   { type:'wire', d:'M50,270 h130',  out:['And2'] },
  
  Not1And1:    { type:'wire', d:'M110,30 h50',  state:true, out:['And1'] },
  EnableAnd1: { type:'wire', d:'M100,150 v-75 h60', out:['And1'] },
  EnableAnd2: { type:'wire', d:'M100,150 v75 h60', out:['And2'] },

  Nor1Q:      { type:'wire', d:'M390,75  h100', out:['Q'] },
  Nor2QQ:     { type:'wire', d:'M390,225 h100', out:['QQ'] },

  And1Nor1: { type:'wire', d:'M200,50 h150',  out:['Nor1'] },
  And2Nor2: { type:'wire', d:'M200,250 h150', out:['Nor2'] },
  Nor1Nor2: { type:'wire', d:'M390,75  h5 v35  l-130,100 h60', out:['Nor2'] },
  Nor2Nor1: { type:'wire', d:'M390,225 h5 v-35 l-130,-100 h60', out:['Nor1'] },
  
  Data:    { type:'button', label:'Data',    cx:50, cy:270,  r:35, out:['DataAnd2','DataNot1'] , transform:'scale(.7)'},
  Enable:  { type:'button', label:'Enable',  cx:100, cy:150, r:35, out:['EnableAnd1', 'EnableAnd2'], transform:'scale(.7)'},

  Not1: {type:'not', cx:100, cy:30, state:true, out:['Not1And1'], transform:'scale(.5)'},

  And1: { type:'and', cx:200, cy:50,  out:['And1Nor1'] },
  And2: { type:'and', cx:200, cy:250, out:['And2Nor2'] },
  Nor1: { type:'nor', cx:350, cy:75,  out:['Nor1Q', 'Nor1Nor2'] },
  Nor2: { type:'nor', cx:350, cy:225, out:['Nor2QQ', 'Nor2Nor1'] },

  Q:   { type:'light',  label:'Q', cx:500, cy:75, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:500, cy:225, transform:'scale(.6)'},
};


const dLatch3 = {
  DataNand1:   { type:'wire', d:'M50,30 h130',  out:['Nand1'] },
  EnableNand1: { type:'wire', d:'M50,270 h50 v-200 h70', out:['Nand1'] },
  EnableNand2: { type:'wire', d:'M50,270 h130', out:['Nand2'] },

  Nand3Q:      { type:'wire', d:'M440,75  h130', out:['Q'] },
  Nand4QQ:     { type:'wire', d:'M440,225 h130', state:true, out:['QQ'] },

  Nand1Nand2: { type:'wire', d:'M245,50 v50 l-120,130 h40', state:true, out:['Nand2'] },
  Nand1Nand3: { type:'wire', d:'M200,50 h180',  state:true, out:['Nand3'] },
  Nand3Nand4: { type:'wire', d:'M440,75 h5 v35 l-150,100 h130', out:['Nand4'] },
  Nand4Nand3: { type:'wire', d:'M440,225 h5 v-35 l-150,-100 h130', out:['Nand3'] },
  Nand2Nand4: { type:'wire', d:'M200,250 h180', out:['Nand4'] },
  
  Data:    { type:'button', label:'Data',    cx:50, cy:30,  r:35, out:['DataNand1'] , transform:'scale(.7)'},
  Enable:  { type:'button', label:'Enable',  cx:50, cy:270, r:35, out:['EnableNand1', 'EnableNand2'], transform:'scale(.7)'},

  Nand1:    { type:'nand', cx:200, cy:50,  state:true, out:['Nand1Nand3','Nand1Nand2'] },
  Nand3:    { type:'nand', cx:400, cy:75,  out:['Nand3Q', 'Nand3Nand4'] },
  Nand2:    { type:'nand', cx:200, cy:250, state:true, out:['Nand2Nand4'] },
  Nand4:    { type:'nand', cx:400, cy:225, state:true, out:['Nand4QQ', 'Nand4Nand3'] },

  Q:   { type:'light',  label:'Q',   cx:550, cy:75,  transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:550, cy:225, state:true, transform:'scale(.6)'},
};



const earle = {
  EnableHighNand1: { type:'wire', d:'M60,130  v-100 h200' },
  DataNand1:       { type:'wire', d:'M150,175 h60 v-100 h60' },
  DataNand2:       { type:'wire', d:'M150,175 h120' },
  EnableLowNand3:  { type:'wire', d:'M60,258  v110 h200' },

  Nand1Nand4: { type:'wire', state:true, d:'M300,50  h80 v120 h30' },
  Nand2Nand4: { type:'wire', state:true, d:'M300,200 h120' },
  Nand3Nand4: { type:'wire', state:true, d:'M300,350 h80 v-120 h30' },
  Nand4Q:     { type:'wire', d:'M450,200 h120' },

  Nand4Nand2: { type:'wire', d:'M495,200 v80 h-275 v-50 h60' },
  Nand4Nand3: { type:'wire', d:'M495,200 v80 h-275 v50 h60' },
  
  Data:       { type:'button', label:'Data',   cx:150, cy:175, r:35, out:['DataNand1', 'DataNand2', 'Nand1', 'Nand2'] , transform:'scale(.7)'},

  Nand1: { type:'nand', cx:300, cy:50,  state:true, out:['Nand1Nand4', 'Nand4'] },
  Nand2: { type:'nand', cx:300, cy:200, state:true, out:['Nand2Nand4', 'Nand4'] },
  Nand3: { type:'nand', cx:300, cy:350, state:true, out:['Nand3Nand4', 'Nand4'] },
  Nand4: { type:'nand', cx:450, cy:200, out:['Nand4Nand2', 'Nand4Nand3', 'Nand2', 'Nand3', 'Nand4Q', 'Q'] },
  
  Q:   { type:'light',  label:'Q', cx:600, cy:200, transform:'scale(.6)' },

  selector1: { type:'selector', x:90, y:130, transform:'scale(.8) rotate(90)',
	       buttons:{
		 'Ehigh':{out:'EnableHighNand1 Nand1'},
		 'Elow' :{out:'EnableLowNand3  Nand3'},
	       },
	     },

};

const jk = {
  JNand1:    { type:'wire', d:'M50,100 h130',  out:['Nand1'] },
  KNand2:  { type:'wire', d:'M50,300 h130', out:['Nand2'] },
  ClkNand1: { type:'wire', d:'M130,200 v-75 h30',  out:['Nand1'] },
  ClkNand2: { type:'wire', d:'M130,200 v75  h30',  out:['Nand2'] },

  JK2J: {type:'wire', d:'m50,200 v-100'},
  JK2K: {type:'wire', d:'m50,200 v100'},
  
  Nand3Q:      { type:'wire', d:'M440,125  h130', out:['Q'] },
  Nand4QQ:     { type:'wire', d:'M440,275 h130', state:true },

  Nand1Nand3: { type:'wire',   d:'M200,100 h180',  out:['Nand3'], state:true },
  Nand2Nand4: { type:'wire',   d:'M200,300 h180', out:['Nand4'], state:true },
  Nand3Nand4: { type:'wire',   d:'M440,125 h5 v35 l-150,100 h130', out:['Nand4'] },
  Nand4Nand3: { type:'wire',   d:'M440,275 h5 v-35 l-150,-100 h130', out:['Nand3'], state:true },

  Nand3Nand2: { type:'wire',   d:'M470,125 v250  h-330 v-50 h50', out:'' },
  Nand4Nand1: { type:'wire',   d:'M490,275 v-250 h-350 v50  h50', out:'', state:true },
  
  J:   { type:'tempButton', label:'J',   cx:50,  cy:100,  r:35, out:'JNand1', transform:'scale(.7)'},
  Clk: { type:'button',     label:'Clk', cx:130, cy:200, r:35, out:['ClkNand1','ClkNand2'] , transform:'scale(.7)'},
  JK:  { type:'tempButton', label:'JK',  cx:50,  cy:200, r:35, out:'JK2J JK2K J K', transform:'scale(.7)'},
  K:   { type:'tempButton', label:'K',   cx:50,  cy:300, r:35, out:'KNand2', transform:'scale(.7)'},


  Nand1:    { type:'nand',    cx:200, cy:100,  state:true, out:['Nand1Nand3'] },
  Nand2:    { type:'nand',    cx:200, cy:300, state:true, out:['Nand2Nand4'] },
  Nand3:    { type:'nand',    cx:400, cy:125, out:'Nand3Q Nand3Nand4 Nand3Nand2 Nand2' },
  Nand4:    { type:'nand',    cx:400, cy:275, state:true, out:'Nand4QQ QQ Nand4Nand3 Nand4Nand1 Nand1' },

  Q:   { type:'light',  label:'Q', cx:550, cy:125, transform:'scale(.6)' },
  QQ:  { type:'light',  label:Qcomp, cx:550, cy:275, transform:'scale(.6)', state:true},
};

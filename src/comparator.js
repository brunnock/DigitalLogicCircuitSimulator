export const comparator1 = {

  AnotA: {type:'wire', d:'m50,30 h130'},
  BnotB: {type:'wire', d:'m50,270 h130'},

  Aand2: {type:'wire', d:'m50,30  l290,230'},
  Band1: {type:'wire', d:'m50,270 l290,-230'},

  notAand1: {type:'wire', d:'m200,30  h150', state:true},
  notBand2: {type:'wire', d:'m200,270 h150', state:true},

  and1xnor: {type:'wire', d:'m390,50  l120,80'},
  and2xnor: {type:'wire', d:'m390,250 l120,-80'},
  
  and1light1: {type:'wire', d:'m350,50  h400'},
  xnorLight2: {type:'wire', d:'m550,150 h200', state:true},
  and2light3: {type:'wire', d:'m350,250 h400'},

  A: {type:'button', cx:50, cy:30,  label:'A', out:'AnotA notA Aand2 and2'},
  B: {type:'button', cx:50, cy:270, label:'B', out:'BnotB notB Band1 and1'},

  notA: {type:'not', cx:200, cy:30,  transform:'scale(.5)', out:'notAand1 and1', state:true},
  notB: {type:'not', cx:200, cy:270, transform:'scale(.5)', out:'notBand2 and2', state:true},
  
  and1: {type:'and', cx:350, cy:50,  out:'and1light1 light1 and1xnor xnor'},
  and2: {type:'and', cx:350, cy:250, out:'and2light3 light3 and2xnor xnor'},
  
  xnor: {type:'xnor', cx:550, cy:150, out:'xnorLight2 light2', state:true},
  
  light1: {type:'light', cx:760, cy:50,  transform:'scale(.6)', label:'a&lt;b'},
  light2: {type:'light', cx:760, cy:150, transform:'scale(.6)', label:'a=b', state:true},
  light3: {type:'light', cx:760, cy:250, transform:'scale(.6)', label:'a&gt;b'},
  
}

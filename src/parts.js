export const notParts = {
  wire1:   { type:'wire',  d:'M125,100 h150', out:['not1'] },
  wire2:   { type:'wire',  d:'M350,100 h100', state:true, out:['light1'] },
  button1: { type:'button', cx:100, cy:100, out:['wire1'] },
  not1:    { type:'not',    cx:300, cy:100, state:true, out:['wire2'] },
  light1:  { type:'light',  cx:500, cy:100, state:true, out:[] },
};

export const andParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['and1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['and1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'] },
  button1: { type:'button', cx:50,  cy:100, out:['wire1'] },
  button2: { type:'button', cx:50,  cy:200, out:['wire2'] },
  and1:    { type:'and',    cx:300, cy:150, out:['wire3'], },
  light1:  { type:'light',  cx:500, cy:150, out:[] },
};

export const nandParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['nand1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['nand1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'], state:true },
  button1: { type:'button', cx:50, cy:100, out:['wire1'] },
  button2: { type:'button', cx:50, cy:200, out:['wire2'] },
  nand1: {type:'nand', cx:300, cy:150, out:['wire3'], state:true },
  light1:  { type:'light',  cx:500, cy:150, state:true },
};

export const orParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['or1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['or1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'] },
  button1: { type:'button', cx:50, cy:100, out:['wire1'] },
  button2: { type:'button', cx:50, cy:200, out:['wire2'] },
  or1:     {type:'or', cx:300, cy:150, out:['wire3'] },
  light1:  { type:'light',  cx:500, cy:150, },
};

export const norParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['nor1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['nor1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'], state:true },
  button1: { type:'button', cx:50, cy:100, out:['wire1'] },
  button2: { type:'button', cx:50, cy:200, out:['wire2'] },
  nor1:     {type:'nor', cx:300, cy:150, out:['wire3'], state:true },
  light1:  { type:'light',  cx:500, cy:150, state:true},
};

export const xorParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['xor1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['xor1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'] },
  button1: { type:'button', cx:50, cy:100, out:['wire1'] },
  button2: { type:'button', cx:50, cy:200, out:['wire2'] },
  xor1:     {type:'xor', cx:300, cy:150, out:['wire3'] },
  light1:  { type:'light',  cx:500, cy:150, },
};

export const xnorParts = {
  wire1:   { type:'wire',  d:'M75,100 l200,25', out:['xnor1'] },
  wire2:   { type:'wire',  d:'M75,200 l200,-25', out:['xnor1'] },
  wire3:   { type:'wire',  d:'M340,150 h120', out:['light1'], state:true },
  button1: { type:'button', cx:50, cy:100, out:['wire1'] },
  button2: { type:'button', cx:50, cy:200, out:['wire2'] },
  xnor1:     {type:'xnor', cx:300, cy:150, out:['wire3'], state:true },
  light1:  { type:'light',  cx:500, cy:150, state:true },
};


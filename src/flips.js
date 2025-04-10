
const nibbles = {
  keypadNib4Clk:    {type:'wire', d:'m550,540 h40 v-95 h-40'},
  keypadNib3Clk:    {type:'wire', d:'m550,540 h40 v-195 h-190'},
  keypadNib2Clk:    {type:'wire', d:'m550,540 h40 v-295 h-340'},
  keypadNib1Clk:    {type:'wire', d:'m550,540 h40 v-395 h-490'},

  nib4o1seven4d:  {type:'wire', d:'m530,420 v-300'},
  nib4o2seven4c:  {type:'wire', d:'m510,420 v-300'},
  nib4o4seven4b:  {type:'wire', d:'m490,420 v-300'},
  nib4o8seven4a:  {type:'wire', d:'m470,420 v-300'},

  nib4o1nib3i1:  {type:'wire', d:'m530,420 v-40 h-150 v-10'},
  nib4o2nib3i2:  {type:'wire', d:'m510,420 v-30 h-150 v-20'},
  nib4o4nib3i4:  {type:'wire', d:'m490,420 v-20 h-150 v-30'},
  nib4o8nib3i8:  {type:'wire', d:'m470,420 v-10 h-150 v-40'},
  
  nib3o1seven3d:  {type:'wire', d:'m380,320 v-200'},
  nib3o2seven3c:  {type:'wire', d:'m360,320 v-200'},
  nib3o4seven3b:  {type:'wire', d:'m340,320 v-200'},
  nib3o8seven3a:  {type:'wire', d:'m320,320 v-200'},
  
  nib3o1nib2i1:  {type:'wire', d:'m380,320 v-40 h-150 v-10'},
  nib3o2nib2i2:  {type:'wire', d:'m360,320 v-30 h-150 v-20'},
  nib3o4nib2i4:  {type:'wire', d:'m340,320 v-20 h-150 v-30'},
  nib3o8nib2i8:  {type:'wire', d:'m320,320 v-10 h-150 v-40'},
  
  nib2o1seven2d:  {type:'wire', d:'m230,220 v-100'},
  nib2o2seven2c:  {type:'wire', d:'m210,220 v-100'},
  nib2o4seven2b:  {type:'wire', d:'m190,220 v-100'},
  nib2o8seven2a:  {type:'wire', d:'m170,220 v-100'},

  nib2o1nib1i1:  {type:'wire', d:'m230,220 v-40 h-150 v-10'},
  nib2o2nib1i2:  {type:'wire', d:'m210,220 v-30 h-150 v-20'},
  nib2o4nib1i4:  {type:'wire', d:'m190,220 v-20 h-150 v-30'},
  nib2o8nib1i8:  {type:'wire', d:'m170,220 v-10 h-150 v-40'},
  
  
  seven1:  {type:'component hex7segment', cx:50, cy:50,  ins:'a b c d', state:'0'},
  seven2:  {type:'component hex7segment', cx:200, cy:50,  ins:'a b c d', state:'0'},
  seven3:  {type:'component hex7segment', cx:350, cy:50,  ins:'a b c d', state:'0'},
  seven4:  {type:'component hex7segment', cx:500, cy:50,  ins:'a b c d', state:'0'},

  nibble1: {type:'component nibble', cx:50, cy:145, transform:'scale(.5)', ins:'i1 i2 i4 i8 Clk', 
	    outs:{o8:'seven1_a', o4:'seven1_b', o2:'seven1_c', o1:'seven1_d',} },

  nibble2: {type:'component nibble', cx:200, cy:245, transform:'scale(.5)', ins:'i1 i2 i4 i8 Clk', 
	    outs:{o8:'nib2o8seven2a seven2_a nib2o8nib1i8 nibble1_i8',
		  o4:'nib2o4seven2b seven2_b nib2o4nib1i4 nibble1_i4',
		  o2:'nib2o2seven2c seven2_c nib2o2nib1i2 nibble1_i2',
		  o1:'nib2o1seven2d seven2_d nib2o1nib1i1 nibble1_i1',} },

  nibble3: {type:'component nibble', cx:350, cy:345, transform:'scale(.5)', ins:'i1 i2 i4 i8 Clk', 
	    outs:{o8:'nib3o8seven3a seven3_a nib3o8nib2i8 nibble2_i8',
		  o4:'nib3o4seven3b seven3_b nib3o4nib2i4 nibble2_i4',
		  o2:'nib3o2seven3c seven3_c nib3o2nib2i2 nibble2_i2',
		  o1:'nib3o1seven3d seven3_d nib3o1nib2i1 nibble2_i1',} },

  nibble4: {type:'component nibble', cx:500, cy:445, transform:'scale(.5)', ins:'i1 i2 i4 i8 Clk', 
	    outs:{o8:'nib4o8seven4a seven4_a nib4o8nib3i8 nibble3_i8',
		  o4:'nib4o4seven4b seven4_b nib4o4nib3i4 nibble3_i4',
		  o2:'nib4o2seven4c seven4_c nib4o2nib3i2 nibble3_i2',
		  o1:'nib4o1seven4d seven4_d nib4o1nib3i1 nibble3_i1',} },

  keypad: {type:'component tempKeypad',  cx:500, cy:540,
	   outs:{o8:'nibble4_i8', o4:'nibble4_i4', o2:'nibble4_i2', o1:'nibble4_i1',
		 e:'keypadNib4Clk,nibble4_Clk   keypadNib3Clk,nibble3_Clk  keypadNib2Clk,nibble2_Clk   keypadNib1Clk,nibble1_Clk'} },
  
}

const nibble = {

  keypadNibClk:  {type:'wire', d:'m100,250 h50 v-105 h-50'},
  
  seven:  {type:'component hex7segment', cx:50, cy:50,  ins:'a b c d', state:'0'},

  nibble: {type:'component nibble', cx:50, cy:145, transform:'scale(.5)',
	   ins:'i1 i2 i4 i8 Clk', 
	   outs:{o8:'seven_a', o4:'seven_b', o2:'seven_c', o1:'seven_d',} },

  keypad: {type:'component tempKeypad',  cx:50, cy:240,
	   outs:{o8:'nibble_i8', o4:'nibble_i4', o2:'nibble_i2', o1:'nibble_i1', e:'keypadNibClk nibble_Clk'} },
  
}

const register1 ={

  buttonFlip1: { type:'wire', d:'m850,200 h-700' },

  flip1light1: { type:'wire', d:'m700,50 v100' },
  flip2light2: { type:'wire', d:'m500,50 v100' },
  flip4light4: { type:'wire', d:'m300,50 v100' },
  flip8light8: { type:'wire', d:'m100,50 v100' },

  button1flip1: { type:'wire', d:'m700,250 v100' },
  button2flip2: { type:'wire', d:'m500,250 v100' },
  button4flip4: { type:'wire', d:'m300,250 v100' },
  button8flip8: { type:'wire', d:'m100,250 v100' },
  

  light1: { type:'light',  cx:700, cy:50, transform:'scale(.5)', },
  light2: { type:'light',  cx:500, cy:50, transform:'scale(.5)', },
  light4: { type:'light',  cx:300, cy:50, transform:'scale(.5)', },
  light8: { type:'light',  cx:100, cy:50, transform:'scale(.5)', },

  flip8: {type:'component flipBT', cx:100, cy:200, ins:'D Clk', outs:{Q:'flip8light8 light8', }},
  flip4: {type:'component flipBT', cx:300, cy:200, ins:'D Clk', outs:{Q:'flip4light4 light4', }},
  flip2: {type:'component flipBT', cx:500, cy:200, ins:'D Clk', outs:{Q:'flip2light2 light2', }},
  flip1: {type:'component flipBT', cx:700, cy:200, ins:'D Clk', outs:{Q:'flip1light1 light1', }},

  buttonClk: { type:'tempButton', cx:850, cy:200, out:'buttonFlip1 flip1_Clk flip2_Clk flip4_Clk flip8_Clk', transform:'scale(.8)' },
  button1:  { type:'button', cx:700, cy:350, out:'button1flip1 flip1_D', transform:'scale(.8)' },
  button2:  { type:'button', cx:500, cy:350, out:'button2flip2 flip2_D', transform:'scale(.8)' },
  button4:  { type:'button', cx:300, cy:350, out:'button4flip4 flip4_D', transform:'scale(.8)' },
  button8:  { type:'button', cx:100, cy:350, out:'button8flip8 flip8_D', transform:'scale(.8)' },

}

const counter7segment ={

  buttonFlip1: { type:'wire', d:'m950,275 h-100' },

  flip1sevenD: { type:'wire', d:'m750,275 h-25 v-105 h-195' },
  flip1sevenC: { type:'wire', d:'m550,275 h-40 v-105' },
  flip1sevenB: { type:'wire', d:'m350,275 h-25 v-65 h165 v-40' },
  flip1sevenA: { type:'wire', d:'m150,275 h-25 v-105 h345' },
  
  flip1QqD:    { type:'wire', d:'m750,325 h-25 v50 h150 v-50 h-25' },

  flip1QqClk2: { type:'wire', d:'m750,325 h-50 v-50 h-50' },
  flip2QqD:    { type:'wire', d:'m550,325 h-25 v50 h150 v-50 h-25' },

  flip2QqClk4: { type:'wire', d:'m550,325 h-50 v-50 h-50' },
  flip4QqD:    { type:'wire', d:'m350,325 h-25 v50 h150 v-50 h-25' },

  flip4QqClk8: { type:'wire', d:'m350,325 h-50 v-50 h-50' },
  flip8QqD:    { type:'wire', d:'m150,325 h-25 v50 h150 v-50 h-25' },

  
  button:  { type:'tempButton', cx:950, cy:275, out:'buttonFlip1 flip1_Clk', transform:'scale(.8)' },

  flip8: {type:'component flipDRL', cx:200, cy:300, ins:'D Clk', outs:{Q:'seven_a flip1sevenA', QQ:'flip8QqD flip8_D'}},
  flip4: {type:'component flipDRL', cx:400, cy:300, ins:'D Clk', outs:{Q:'seven_b flip1sevenB', QQ:'flip4QqD flip4_D flip4QqClk8 flip8_Clk'}},
  flip2: {type:'component flipDRL', cx:600, cy:300, ins:'D Clk', outs:{Q:'seven_c flip1sevenC', QQ:'flip2QqD flip2_D flip2QqClk4 flip4_Clk'}},
  flip1: {type:'component flipDRL', cx:800, cy:300, ins:'D Clk', outs:{Q:'seven_d flip1sevenD', QQ:'flip1QqD flip1_D flip1QqClk2 flip2_Clk'}},

  seven: {type:'component hex7segment', cx:500, cy:100, ins:'a b c d', state:'0'},
  
}


const flipCounter4 ={

  buttonFlip1: { type:'wire', d:'m950,175 h-100' },

  flip1light1: { type:'wire', d:'m750,175 h-25 v-100' },
  flip1QqD:    { type:'wire', d:'m750,225 h-25 v50 h150 v-50 h-25' },

  flip1QqClk2: { type:'wire', d:'m750,225 h-50 v-50 h-50' },
  flip2light2: { type:'wire', d:'m550,175 h-25 v-100' },
  flip2QqD:    { type:'wire', d:'m550,225 h-25 v50 h150 v-50 h-25' },

  flip2QqClk4: { type:'wire', d:'m550,225 h-50 v-50 h-50' },
  flip4light4: { type:'wire', d:'m350,175 h-25 v-100' },
  flip4QqD:    { type:'wire', d:'m350,225 h-25 v50 h150 v-50 h-25' },

  flip4QqClk8: { type:'wire', d:'m350,225 h-50 v-50 h-50' },
  flip8light8: { type:'wire', d:'m150,175 h-25 v-100' },
  flip8QqD:    { type:'wire', d:'m150,225 h-25 v50 h150 v-50 h-25' },

  
  button:  { type:'tempButton', cx:950, cy:175, out:'buttonFlip1 flip1_Clk', transform:'scale(.8)' },

  flip8: {type:'component flipDRL', cx:200, cy:200, ins:'D Clk', outs:{Q:'flip8light8 light8', QQ:'flip8QqD flip8_D'}},
  flip4: {type:'component flipDRL', cx:400, cy:200, ins:'D Clk', outs:{Q:'flip4light4 light4', QQ:'flip4QqD flip4_D flip4QqClk8 flip8_Clk'}},
  flip2: {type:'component flipDRL', cx:600, cy:200, ins:'D Clk', outs:{Q:'flip2light2 light2', QQ:'flip2QqD flip2_D flip2QqClk4 flip4_Clk'}},
  flip1: {type:'component flipDRL', cx:800, cy:200, ins:'D Clk', outs:{Q:'flip1light1 light1', QQ:'flip1QqD flip1_D flip1QqClk2 flip2_Clk'}},

  light1: { type:'light',  cx:725, cy:50, transform:'scale(.5)', },
  light2: { type:'light',  cx:525, cy:50, transform:'scale(.5)', },
  light4: { type:'light',  cx:325, cy:50, transform:'scale(.5)', },
  light8: { type:'light',  cx:125, cy:50, transform:'scale(.5)', },

}

const flipCounter1 ={

  Clkflip1: { type:'wire', d:'M50,130 h100' },
  QQ2D: { type:'wire', d:'M250,130 h20 v50 h-150 v-105 h30'},

  flip1Qlight:  { type:'wire', d:'M250,75 h100' },

  Clk:  { type:'tempButton', label:'Clk', cx:50, cy:130, out:'Clkflip1 flip1_Clk', transform:'scale(.8)' },

  flip1: {type:'component flipD', cx:200, cy:100, ins:'D Clk', outs:{Q:'flip1Qlight Qlight', QQ:'QQ2D flip1_D'}},

  Qlight:  { type:'light',  cx:350, cy:75, transform:'scale(.4)', },
  
}

const flipComponent ={

  Dflip1: { type:'wire', d:'M50,75 h100'  },
  Clkflip1: { type:'wire', d:'M50,130 h100' },

  flip1Qlight:  { type:'wire', d:'M250,75 h100' },
  flip1QQlight: { type:'wire', d:'M250,130 h100' },

  D:  { type:'button', label:'D', cx:50, cy:75, out:'Dflip1 flip1_D', transform:'scale(.8)' },
  Clk:  { type:'tempButton', label:'Clk', cx:50, cy:130, out:'Clkflip1 flip1_Clk', transform:'scale(.8)' },

  flip1: {type:'component flipD', cx:200, cy:100, ins:'D Clk', outs:{Q:'flip1Qlight Qlight', QQ:'flip1QQlight QQlight'}},

  Qlight:  { type:'light',  cx:350, cy:75, transform:'scale(.4)', },
  QQlight: { type:'light',  cx:350, cy:130, transform:'scale(.4)', },
  
}

const posDflip = {

  masterRect: {type:'raw', text: '<rect x="80" y="0" width="240" height="300" style="stroke-width:0; fill:#eee" />' },
  slaveRect:  {type:'raw', text: '<rect x="90" y="450" width="220" height="300" style="stroke-width:0; fill:#eee" />' },
  
  Dnand4: { type:'wire', out:['nand4'], d:'M50,720 h120'  },

  ClockNand2: { type:'wire', out:['nand2'], d:'M100,375 v-100 h80'  },
  ClockNand3: { type:'wire', out:['nand3'], d:'M100,375 v120 h80'  },

  nand1nand2: { type:'wire', out:['nand2'], d:'M200,50  h100 l-200,175 h100'  },

  nand2nand1: { type:'wire', out:['nand1'], state:true, d:'M200,250 h100 l-200,-175 h100'  },
  nand2nand3: { type:'wire', out:['nand3'], state:true, d:'M200,250 h100 l-170,225 h50'  },
  nand2nand5: { type:'wire', out:['nand5'], state:true, d:'M200,250 h220'  },
  node2:      { type:'node', cx:297, cy:250 },
          
  nand3nand4: { type:'wire', state:true, out:['nand4'], d:'M200,500 h100 l-200,175 h100'  },
  nand3nand6: { type:'wire', state:true, out:['nand6'], d:'M200,500 h220'  },
  node3:      { type:'node', cx:297, cy:500 },

  nand4nand1: { type:'wire', out:['nand1'], state:true, d:'M200,700 h100 l-250,-175 v-500 h120'  },
  nand4nand3: { type:'wire', out:['nand3'], state:true, d:'M200,700 h100 l-250,-175 h120'  },
  node4:      { type:'node', cx:50, cy:525 },

  nand5nand6: { type:'wire', out:['nand6'], d:'M495,275 v50 l-140,130 h80'  },
  nand6nand5: { type:'wire', out:['nand5'], d:'M495,475 v-50 l-140,-130 h80'  },

  nand5Q:  { type:'wire', out:['Q'],  d:'M450,275 h100'  },
  nand6QQ: { type:'wire', out:['QQ'], state:true, d:'M450,475 h100'  },


  D:     { type:'button', label:'D', cx:50, cy:720, out:['Dnand4'] },
  Clock: { type:'button', label:'<tspan font-size="80%" alignment-baseline="middle">Clock</tspan>', cx:100, cy:375, out:['ClockNand2', 'ClockNand3'] },

  nand1: { type:'nand', cx:200, cy:50,  out:['nand1nand2'] },
  nand2: { type:'nand', cx:200, cy:250, state:true, out:['nand2nand1', 'nand2nand3', 'nand2nand5'] },
  nand3: { type:'nand', cx:200, cy:500, state:true, out:['nand3nand4', 'nand3nand6'] },
  nand4: { type:'nand', cx:200, cy:700, state:true, out:['nand4nand1', 'nand4nand3'] },
  nand5: { type:'nand', cx:450, cy:275, out:['nand5Q',     'nand5nand6'] },
  nand6: { type:'nand', cx:450, cy:475, state:true, out:['nand6QQ',    'nand6nand5'] },

  Q:  { type:'light',  cx:575, cy:275, transform:'scale(.5)', label:'Q',  },
  QQ: { type:'light',  cx:575, cy:475, state:true, transform:'scale(.5)', label:Qcomp},

  masterText: {type:'raw', text: '<text x="120" y="150" textAnchor="middle" alignmentBaseline="middle">Master Latch</text>' },
  slaveText:  {type:'raw', text: '<text x="200" y="610" textAnchor="middle" alignmentBaseline="middle">Slave Latch</text>' },
  
};


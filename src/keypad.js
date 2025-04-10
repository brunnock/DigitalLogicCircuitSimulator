const keypad = {
  keypad:   {type:'component keypad', cx:150, cy:200, outs:{o8:'number_a', o4:'number_b', o2:'number_c', o1:'number_d'}, },
  number: {type:'component hex7segment', cx:150, cy:60, ins:'a b c d', state:'0'},
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


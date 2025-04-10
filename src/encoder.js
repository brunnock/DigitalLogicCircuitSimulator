export const keypad = {
  keypad:   {type:'component keypad', cx:150, cy:200, outs:{o8:'number_a', o4:'number_b', o2:'number_c', o1:'number_d'}, },
  number: {type:'component hex7segment', cx:150, cy:60, ins:'a b c d', state:'0'},
}

export const encoder8x3comp = {
  
  selector0encod1: {type:'wire', d:'m50,35 h100'},
  selector1encod1: {type:'wire', d:'m50,70 h100'},
  selector2encod1: {type:'wire', d:'m50,105 h100'},
  selector3encod1: {type:'wire', d:'m50,140 h100'},
  selector4encod1: {type:'wire', d:'m50,175 h100'},
  selector5encod1: {type:'wire', d:'m50,210 h100'},
  selector6encod1: {type:'wire', d:'m50,245 h100'},
  selector7encod1: {type:'wire', d:'m50,280 h100'},

  encod1light1: {type:'wire', d:'m260,135 l100,-15'},
  encod1light2: {type:'wire', d:'m260,160 h100'},
  encod1light4: {type:'wire', d:'m260,185 l100,15'},

  selector1: { type:'selector', x:50, y:10, transform:'scale(.47) rotate(90)', 
	       buttons:{
		 '0':{out:'encod1_i0 selector0encod1'},
		 '1':{out:'encod1_i1 selector1encod1'},
		 '2':{out:'encod1_i2 selector2encod1'},
		 '3':{out:'encod1_i3 selector3encod1'},
		 '4':{out:'encod1_i4 selector4encod1'},
		 '5':{out:'encod1_i5 selector5encod1'},
		 '6':{out:'encod1_i6 selector6encod1'},
		 '7':{out:'encod1_i7 selector7encod1'},
	       },
	     },

  encod1: {
    type:'component encoder8x3', cx:200, cy:160,
    ins:'i0 i1 i2 i3 i4 i5 i6 i7',
    outs:{o1:'light1 encod1light1',
	  o2:'light2 encod1light2',
	  o4:'light4 encod1light4'}, 
  },

  light1: {type:'light', cx:350, cy:120, transform:'scale(.3)'},
  light2: {type:'light', cx:350, cy:160, transform:'scale(.3)'},
  light4: {type:'light', cx:350, cy:200, transform:'scale(.3)'},
  
}

export const encoder8x3 = {

  button1wires: {type:'wire', d:'m125,400  v-130 h600' },
  button2wires: {type:'wire', d:'m200,400 v-230 h550' },
  button3wires: {type:'wire', d:'m275,400 v-140 h470 h-470 v-100 h470' },
  button4wires: {type:'wire', d:'m350,400 v-330 h400' },
  button5wires: {type:'wire', d:'m425,400 v-150 h320 h-320 v-190 h320' },
  button6wires: {type:'wire', d:'m500,400 v-250 h240 h-240 v-100 h240' },
  button7wires: {type:'wire', d:'m575,400 v-160 h160 h-160 v-100 h160 h-160 v-100 h160' },

  or1light1: {type:'wire', d:'m750,250 h100' },
  or2light2: {type:'wire', d:'m750,150 h100' },
  or4light4: {type:'wire', d:'m750,50 h100' },
  
  light4: {type:'light', cx:850, cy:50,  label:'4', transform:'scale(.7)'},
  light2: {type:'light', cx:850, cy:150, label:'2', transform:'scale(.7)'},
  light1: {type:'light', cx:850, cy:250, label:'1', transform:'scale(.7)'},
  
  or4 : {type:'or', cx:750, cy:50,  out:'light4 or4light4', transform:'scale(.7)'},
  or2 : {type:'or', cx:750, cy:150, out:'light2 or2light2', transform:'scale(.7)'},
  or1 : {type:'or', cx:750, cy:250, out:'light1 or1light1', transform:'scale(.7)'},

  selector1: { type:'selector', x:0, y:400, 
	       buttons:{
		 '0':{out:''},
		 '1':{out:'or1 button1wires'},
		 '2':{out:'or2 button2wires'},
		 '3':{out:'or2 or1 button3wires'},
		 '4':{out:'or4 button4wires'},
		 '5':{out:'or4 or1 button5wires'},
		 '6':{out:'or4 or2 button6wires'},
		 '7':{out:'or4 or2 or1 button7wires'},
	       },
	     },
  
};

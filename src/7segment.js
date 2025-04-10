export const seven = {

  bg: {type:'raw', text: '<rect x="300" y="100"width="300" height="500" style="fill:#bbb; stroke-width:0" />' },

  or1led1: {type:'wire', d:'m363,50 v100 h20'},
  or2led2: {type:'wire', d:'m275,275 l75,50'},
  or3led3: {type:'wire', d:'m650,325 h-100'},
  or4led4: {type:'wire', d:'m275,375 l100,-25'},
  or5led5: {type:'wire', d:'m250,525 h100'},
  or6led6: {type:'wire', d:'m625,525 h-75'},
  or7led7: {type:'wire', d:'m375,650 v-100'},

  button0or1: {type:'wire', d:'m100,750 v-40 v-660 h220', invisible:true},
  button0or2: {type:'wire', d:'m100,750 v-40 v-435 h130', invisible:true},
  button0or3: {type:'wire', d:'m100,750 v-40 h650 v-385 h-100', invisible:true},
  button0or5: {type:'wire', d:'m100,750 v-40 v-180 h130', invisible:true},
  button0or6: {type:'wire', d:'m100,750 v-40 h650 v-185 h-100', invisible:true},
  button0or7: {type:'wire', d:'m100,750 v-40 h275 v-50', invisible:true},

  button1or3: {type:'wire', d:'m175,750 v-40 h550 v-385 h-60', invisible:true},
  button1or6: {type:'wire', d:'m175,750 v-40 h550 v-185 h-60', invisible:true},

  button2or1: {type:'wire', d:'m250,750 v-40 h-150 v-660 h220', invisible:true},
  button2or3: {type:'wire', d:'m250,750 v-40 h500 v-385 h-80', invisible:true},
  button2or4: {type:'wire', d:'m250,750 v-40 h-150 v-335 h130', invisible:true},
  button2or5: {type:'wire', d:'m250,750 v-40 h-150 v-185 h130', invisible:true},
  button2or7: {type:'wire', d:'m250,750 v-40 h125 v-50', invisible:true},

  button3or1: {type:'wire', d:'m325,750 v-40 h-200 v-660 h190', invisible:true},
  button3or3: {type:'wire', d:'m325,750 v-40 h400 v-385 h-80', invisible:true},
  button3or4: {type:'wire', d:'m325,750 v-40 h-200 v-335 h110', invisible:true},
  button3or6: {type:'wire', d:'m325,750 v-40 h400 v-185 h-70', invisible:true},
  button3or7: {type:'wire', d:'m325,750 v-40 h50 v-50', invisible:true},

  button4or2: {type:'wire', d:'m400,750 v-40 h-250 v-435 h80', invisible:true},
  button4or3: {type:'wire', d:'m400,750 v-40 h350 v-385 h-80', invisible:true},
  button4or4: {type:'wire', d:'m400,750 v-40 h-250 v-335 h80', invisible:true},
  button4or6: {type:'wire', d:'m400,750 v-40 h350 v-185 h-80', invisible:true},

  button5or1: {type:'wire', d:'m475,750 v-40 h-350 v-660 h190', invisible:true},
  button5or2: {type:'wire', d:'m475,750 v-40 h-350 v-435 h110', invisible:true},
  button5or4: {type:'wire', d:'m475,750 v-40 h-350 v-335 h110', invisible:true},
  button5or6: {type:'wire', d:'m475,750 v-40 h250 v-185 h-70', invisible:true},
  button5or7: {type:'wire', d:'m475,750 v-40 h-100 v-50', invisible:true},

  button6or1: {type:'wire', d:'m550,750 v-40 h-400 v-660 h170', invisible:true},
  button6or2: {type:'wire', d:'m550,750 v-40 h-400 v-435 h80', invisible:true},
  button6or4: {type:'wire', d:'m550,750 v-40 h-400 v-335 h80', invisible:true},
  button6or5: {type:'wire', d:'m550,750 v-40 h-400 v-185 h80', invisible:true},
  button6or6: {type:'wire', d:'m550,750 v-40 h150 v-185 h-70', invisible:true},
  button6or7: {type:'wire', d:'m550,750 v-40 h-175 v-50', invisible:true},
  
  button7or1: {type:'wire', d:'m625,750 v-40 h-500 v-660 h200', invisible:true},
  button7or3: {type:'wire', d:'m625,750 v-40 h100 v-385 h-60',  invisible:true},
  button7or6: {type:'wire', d:'m625,750 v-40 h100 v-185 h-60',  invisible:true},

  button8or1: {type:'wire', d:'m700,750 v-40 h-575 v-660 h190', invisible:true},
  button8or2: {type:'wire', d:'m700,750 v-40 h-575 v-435 h110', invisible:true},
  button8or3: {type:'wire', d:'m700,750 v-425 h-100', invisible:true},
  button8or4: {type:'wire', d:'m700,750 v-40 h-575 v-335 h110', invisible:true},
  button8or5: {type:'wire', d:'m700,750 v-40 h-575 v-180 h110', invisible:true},
  button8or6: {type:'wire', d:'m700,750 v-225 h-110', invisible:true},
  button8or7: {type:'wire', d:'m700,750 v-40 h-325 v-50', invisible:true},

  button9or1: {type:'wire', d:'m775,750 v-40 h-650 v-660 h190', invisible:true},
  button9or2: {type:'wire', d:'m775,750 v-40 h-650 v-435 h110', invisible:true},
  button9or3: {type:'wire', d:'m775,750 v-425 h-110', invisible:true},
  button9or4: {type:'wire', d:'m775,750 v-40 h-650 v-335 h110', invisible:true},
  button9or6: {type:'wire', d:'m775,750 v-225 h-110', invisible:true},
  button9or7: {type:'wire', d:'m775,750 v-40 h-400 v-50', invisible:true},

  or1 : {type:'or', cx:335, cy:50,  out:'or1led1 led1', transform:'scale(.7)'},
  or2 : {type:'or', cx:250, cy:275, out:'or2led2 led2', transform:'scale(.7)'},
  or3 : {type:'or', cx:650, cy:325, out:'or3led3 led3', transform:'scale(.7) rotate(180)'},
  or4 : {type:'or', cx:250, cy:375, out:'or4led4 led4', transform:'scale(.7)'},
  or5 : {type:'or', cx:250, cy:525, out:'or5led5 led5', transform:'scale(.7)'},
  or6 : {type:'or', cx:650, cy:525, out:'or6led6 led6', transform:'scale(.7) rotate(180)'},
  or7 : {type:'or', cx:375, cy:650, out:'or7led7 led7', transform:'scale(.7) rotate(-90)'},

  led1 : {type:'led', cx:450, cy:150, transform:'scale(1.5,  .5)'},
  led2 : {type:'led', cx:350, cy:250, transform:'scale( .5, 1.5) rotate(-90)'},
  led3 : {type:'led', cx:550, cy:250, transform:'scale( .5, 1.5) rotate(-90)'},
  led4 : {type:'led', cx:450, cy:350, transform:'scale(1.5,  .5)'},
  led5 : {type:'led', cx:350, cy:450, transform:'scale( .5, 1.5) rotate(-90)'},
  led6 : {type:'led', cx:550, cy:450, transform:'scale( .5, 1.5) rotate(-90)'},
  led7 : {type:'led', cx:450, cy:550, transform:'scale(1.5,  .5)'},

  selector1: { type:'selector', x:50, y:750, 
	       buttons:{
		 '0':{out:'or1 or2 or3 or5 or6 or7 button0or1 button0or2 button0or3 button0or5 button0or6 button0or7'},
		 '1':{out:'or3 or6 button1or3 button1or6'},
		 '2':{out:'or1 or3 or4 or5 or7 button2or1 button2or3 button2or4 button2or5 button2or7'},
		 '3':{out:'or1 or3 or4 or6 or7 button3or1 button3or3 button3or4 button3or6 button3or7'},
		 '4':{out:'or2 or3 or4 or6 button4or2 button4or3 button4or4 button4or6'},
		 '5':{out:'or1 or2 or4 or6 or7 button5or1 button5or2 button5or4 button5or6 button5or7'},
		 '6':{out:'or1 or2 or4 or5 or6 or7 button6or1 button6or2 button6or4 button6or5 button6or6 button6or7'},
		 '7':{out:'or1 or3 or6 button7or1 button7or3 button7or6'},
		 '8':{out:'or1 or2 or3 or4 or5 or6 or7 button8or1 button8or2 button8or3 button8or4 button8or5 button8or6 button8or7'},
		 '9':{out:'or1 or2 or3 or4 or6 or7 button9or1 button9or2 button9or3 button9or4 button9or6 button9or7'},
	       },
	     },
  
};


export const sevenComp = {
  seven: {type:'component hex7segment', cx:150, cy:60, ins:'a b c d', state:'0'},

  A: { type:'button', label:'8', cx:120, cy:135, out:'seven_a', transform:'scale(.3)' },
  B: { type:'button', label:'4', cx:140, cy:135, out:'seven_b', transform:'scale(.3)' },
  C: { type:'button', label:'2', cx:160, cy:135, out:'seven_c', transform:'scale(.3)' },
  D: { type:'button', label:'1', cx:180, cy:135, out:'seven_d', transform:'scale(.3)' },
  
}

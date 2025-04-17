import {Button,TempButton} from './discrete.jsx';
import {Subtext,Overline} from './markup.jsx';

export function Keypad({partID,props,dispatch}) {
  let {cx,cy,state={},transform=''} = props;
  
  let KeypadButton = ({num,cx,cy}) => 
  <Button key={partID+'_'+num} 
	  props={{cx:cx, cy:cy, label:num, state:(num===state.selected), transform:'scale(.5)'}}
	  dispatch={dispatch}
	  dispatchParams={{type:'pressKeypad', partID:partID, value:num}} />

  return (<g className="keypad" transformOrigin={`${cx} ${cy}`} transform={transform}>

	    <path className={`prong ${state.o8 ? 'on' : 'off'}`} d={`m${cx-30},${cy-50} v-20`} />
	    <path className={`prong ${state.o4 ? 'on' : 'off'}`} d={`m${cx-10},${cy-50} v-20`} />
	    <path className={`prong ${state.o2 ? 'on' : 'off'}`} d={`m${cx+10},${cy-50} v-20`} />
	    <path className={`prong ${state.o1 ? 'on' : 'off'}`} d={`m${cx+30},${cy-50} v-20`} />
	    
            <rect className="keypad" x={cx-50} y={cy-50} width={100} height={130} fill="#888" />

	    <KeypadButton num={7} cx={cx-30} cy={cy-30} />
	    <KeypadButton num={8} cx={cx}    cy={cy-30} />
	    <KeypadButton num={9} cx={cx+30} cy={cy-30} />
	    
	    <KeypadButton num={4} cx={cx-30} cy={cy} />
	    <KeypadButton num={5} cx={cx}    cy={cy} />
	    <KeypadButton num={6} cx={cx+30} cy={cy} />
	    
	    <KeypadButton num={1} cx={cx-30} cy={cy+30} />
	    <KeypadButton num={2} cx={cx}    cy={cy+30} />
	    <KeypadButton num={3} cx={cx+30} cy={cy+30} />
	    
	    <KeypadButton num={0} cx={cx}    cy={cy+60} />
          </g>);
};


export function TempKeypad({partID,props,dispatch}) {
  let {cx,cy,state={},transform=''} = props;
  
  let KeypadButton = ({num,cx,cy}) => 
  <TempButton key={partID+'_'+num} partID={partID}
	      props={{cx:cx, cy:cy, label:num, state:(num===state.selected), transform:'scale(.5)'}}
	      dispatch={dispatch}
	      dispatchParams={{type:'pressTempKeypad', partID:partID, value:num}} />

  return (<g className="keypad" transformOrigin={`${cx} ${cy}`} transform={transform}>

	    <path className={`prong ${state.o8 ? 'on' : 'off'}`} d={`m${cx-30},${cy-50} v-20`} />
	    <path className={`prong ${state.o4 ? 'on' : 'off'}`} d={`m${cx-10},${cy-50} v-20`} />
	    <path className={`prong ${state.o2 ? 'on' : 'off'}`} d={`m${cx+10},${cy-50} v-20`} />
	    <path className={`prong ${state.o1 ? 'on' : 'off'}`} d={`m${cx+30},${cy-50} v-20`} />
	    
            <rect className="keypad" x={cx-50} y={cy-50} width={100} height={130} fill="#888" />

	    <KeypadButton num={7} cx={cx-30} cy={cy-30} />
	    <KeypadButton num={8} cx={cx}    cy={cy-30} />
	    <KeypadButton num={9} cx={cx+30} cy={cy-30} />
	    
	    <KeypadButton num={4} cx={cx-30} cy={cy} />
	    <KeypadButton num={5} cx={cx}    cy={cy} />
	    <KeypadButton num={6} cx={cx+30} cy={cy} />
	    
	    <KeypadButton num={1} cx={cx-30} cy={cy+30} />
	    <KeypadButton num={2} cx={cx}    cy={cy+30} />
	    <KeypadButton num={3} cx={cx+30} cy={cy+30} />
	    
	    <KeypadButton num={0} cx={cx}    cy={cy+60} />
          </g>);
};


export function Nibble({id, props}) {
  let {cx,cy,transform='',state={}} = props;
  //<text x={cx+90} y={cy} textAnchor="end" alignmentBaseline="middle">E</text>

  return (
    <g transformOrigin={`${cx} ${cy}`} transform={transform}>
      <rect x={cx-100} y={cy-50} height={100} width={200} />

      <g textAnchor="middle">
	<text className={`state.o8.state ? 'on' : 'off'`} x={cx-60} y={cy-30}>O<Subtext>8</Subtext></text>
	<text x={cx-20} y={cy-30}>O<Subtext>4</Subtext></text>
	<text x={cx+20} y={cy-30}>O<Subtext>2</Subtext></text>
	<text x={cx+60} y={cy-30}>O<Subtext>1</Subtext></text>

	<text x={cx-60} y={cy+40}>I<Subtext>8</Subtext></text>
	<text x={cx-20} y={cy+40}>I<Subtext>4</Subtext></text>
	<text x={cx+20} y={cy+40}>I<Subtext>2</Subtext></text>
	<text x={cx+60} y={cy+40}>I<Subtext>1</Subtext></text>
      </g>
      
      <path className='Clock' d={`m${cx+100},${cy-10} l-10,10 10,10`} style={{fill:'none'}}/>
      
    </g>
  );
}

export function UpDownGDlatch({props}) {
  // simplerD latch with input at bottom and output at top
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx} y={cy-30} textAnchor="middle">Q</text>
      <text x={cx+45} y={cy} textAnchor="end" alignmentBaseline="middle">E</text>
      <text x={cx} y={cy+45} textAnchor="middle">D</text>
    </g>
  );
}

export function Hex2BCD({id, props}) {
  //console.log(props);
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-100} y={cy-50} height={100} width={200} />

      <text x={cx-75} y={cy+40}>16<Subtext>in</Subtext></text>
      <text x={cx-30} y={cy+40}>8<Subtext>in</Subtext></text>
      <text x={cx+10} y={cy+40}>4<Subtext>in</Subtext></text>
      <text x={cx+45} y={cy+40}>2<Subtext>in</Subtext></text>

      <text x={cx-90} y={cy}>C<Subtext>out</Subtext></text>
      <text x={cx-50} y={cy-30}>8<Subtext>out</Subtext></text>
      <text x={cx-10} y={cy-30}>4<Subtext>out</Subtext></text>
      <text x={cx+30} y={cy-30}>2<Subtext>out</Subtext></text>
    </g>
  );
}


export function Encoder8x3({id, props}) {
  let {cx,cy,transform='',state} = props;

  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-150} width={100} height={300} />
      {[...new Array(8)].map((x,indx)=> {
	let onOff = (state.selected == indx);
	return (
	  <g key={id+indx} transform={`translate(0,${indx*35})`} className={`prong ${onOff ? 'on' : 'off'}`}>
	    <path d={`m${cx-51},${cy-125} h-10`} />
	    <text className='smallText' x={cx-45} y={cy-120}>{indx}</text>
	  </g>
	)
      })}

      <g className={`prong ${state.o1 ? 'on' : 'off'}`}>
	<path d={`m${cx+51},${cy-25} h10`} />
	<text className='smallText' x={cx+35} y={cy-20}>1</text>
      </g>
      
      <g className={`prong ${state.o2 ? 'on' : 'off'}`}>
	<path d={`m${cx+51},${cy} h10`} />
	<text className='smallText' x={cx+35} y={cy+5}>2</text>
      </g>

      <g className={`prong ${state.o4 ? 'on' : 'off'}`}>
	<path d={`m${cx+51},${cy+25} h10`} />
	<text className='smallText' x={cx+35} y={cy+30}>4</text>
      </g>
      
    </g>
  )
}



export function Dmux4({id, props}) {
  // a 1-4 demultiplexer
  let {cx,cy,transform='',selected=0} = props;
  return (
    <g transform={transform}>
      <path d={`m${cx-25},${cy-50} l50,-25 v150 l-50,-25 z`} />
      <text key={id+'o0'} x={cx+3} y={cy-40} className={`smallText ${selected===0 ? 'on' : 'off'}`}>O<Subtext>0</Subtext></text>
      <text key={id+'o1'} x={cx+3} y={cy-10} className={`smallText ${selected===1 ? 'on' : 'off'}`}>O<Subtext>1</Subtext></text>
      <text key={id+'o2'} x={cx+3} y={cy+20} className={`smallText ${selected===2 ? 'on' : 'off'}`}>O<Subtext>2</Subtext></text>
      <text key={id+'o3'} x={cx+3} y={cy+50} className={`smallText ${selected===3 ? 'on' : 'off'}`}>O<Subtext>3</Subtext></text>
    </g>
  ); 
}


export function Dmux2({id, props}) {
  // a 1-2 demultiplexer
  let {cx,cy,transform='',selected=0} = props;
  return (
    <g transform={transform}>
      <path d={`m${cx-25},${cy-25} l50,-25 v100 l-50,-25 z`} />
      <text key={id+'o0'} x={cx+3} y={cy-10} className={`smallText ${selected===0 ? 'on' : 'off'}`}>O<Subtext>0</Subtext></text>
      <text key={id+'o1'} x={cx+3} y={cy+20} className={`smallText ${selected===1 ? 'on' : 'off'}`}>O<Subtext>1</Subtext></text>
    </g>
  );
}


export function HexSevenSegment({id, props}) {
  let {cx,cy,transform='',state} = props;
  let bits = [0,0,0,0];
  if (state) bits = parseInt(state, 16).toString(2).padStart(4,'0').split('');
  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-50} width={100} height={100} style={{fill:'#000'}} />
      <text x={cx-27} y={cy+40} style={{fill:'red', fontFamily:'Digital7,monospace', fontSize:'125'}}>{state}</text>
      <path d={`m${cx-30},${cy+51} v20`} className={`${bits[0]>0 ? 'on' : 'off'}`} />
      <path d={`m${cx-10},${cy+51} v20`} className={`${bits[1]>0 ? 'on' : 'off'}`} />
      <path d={`m${cx+10},${cy+51} v20`} className={`${bits[2]>0 ? 'on' : 'off'}`} />
      <path d={`m${cx+30},${cy+51} v20`} className={`${bits[3]>0 ? 'on' : 'off'}`} />
    </g>
  )
}


export function Decoder2x4({id, props}) {
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-25} y={cy-50} width={50} height={100} /> 

      <text x={cx-23} y={cy-10}>A</text>
      <text x={cx-23} y={cy+25}>B</text>

      <g style={{strokeWidth:0}}>
	<text x={cx} y={cy-30}>Q<Subtext>0</Subtext></text>
	<text x={cx} y={cy-5}>Q<Subtext>1</Subtext></text>
	<text x={cx} y={cy+20}>Q<Subtext>2</Subtext></text>
	<text x={cx} y={cy+45}>Q<Subtext>3</Subtext></text>
      </g>
      
    </g>
  );
  
}


export function Mux2({id, props}) {
  // a 2-1 mux
  let {cx,cy,transform='',selected=0} = props;
  return (
    <g transform={transform}>
      <path d={`m${cx},${cy-25} l25,10 v30 l-25,10 z`} />
      <text key={id+'A'} x={cx+3} y={cy-5}  className={`smallText ${selected===0 ? 'on' : 'off'}`}>A</text>
      <text key={id+'B'} x={cx+3} y={cy+15} className={`smallText ${selected===1 ? 'on' : 'off'}`}>B</text>
    </g>
  );
  
}

export function Mux({id, props}) {
  // can be used to show a 4-1 or 8-1 mux
  let {cx,cy,transform='',ins=[],sigs=[],selected} = props;
  let height = 22*ins.length;
  let top = cy - (height/2);
  return (
    <g transform={transform}>
      <path d={`m${cx-25},${top} l50,25 v${height-50} l-50,25 z `} />
      {ins.map( (x,indx) =>
	<text key={id+'in'+indx} x={cx-23} y={top+((indx+1)*20)} className={`smallText ${indx===selected ? 'on' : 'off'}`}>{x}</text>
      )}
    </g>
  );
  
}


export function GatedDlatch({props}) {
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx-45} y={cy-18}>D</text>
      <text x={cx-45} y={cy+35}>E</text>
      <text x={cx+40} y={cy-18} textAnchor="end">Q</text>
      <text x={cx+40} y={cy+35} textAnchor="end"><Overline>Q</Overline></text>
    </g>
  );
}


export function FlipD({props}) {
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx-45} y={cy-18}>D</text>
      <path d={`m${cx-50},${cy+20} l10,10 -10,10`} style={{fill:'none'}}/>
      <text x={cx+40} y={cy-18} textAnchor="end">Q</text>
      <text x={cx+40} y={cy+35} textAnchor="end"><Overline>Q</Overline></text>
    </g>
  );
}

export function FlipBT({props}) {
  // A D flip flop with input on bottom and output at the top.
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform} textAnchor="middle">
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx} y={cy-25}>Q</text>
      <path className='Clock' d={`m${cx+50},${cy-10} l-10,10 10,10`} style={{fill:'none'}}/>
      <text x={cx} y={cy+45}>D</text>
    </g>
  );  
}

export function FlipDRL({props}) {
  // A D flip flop that has inputs on the right and outputs on the left
  let {cx,cy,transform=''} = props;
  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx-45} y={cy-18}>Q</text>
      <text x={cx-45} y={cy+35}><Overline>Q</Overline></text>
      <path className='Clock' d={`m${cx+50},${cy-35} l-10,10 10,10`} style={{fill:'none'}}/>
      <text x={cx+45} y={cy+35} textAnchor="end">D</text>
    </g>
  );  
}

export function HalfAdder({props}) {
  let {cx,cy,transform=''} = props;

  /*
    return rect with 2 inputs (A,B) and 2 outputs (Sum,Carry)

    A|B|Sum|Carry
    0|0| 0 | 0
    0|1| 1 | 0
    1|0| 1 | 0
    1|1| 1 | 1
    
   */

  return (
    <g transform={transform}>
      <rect x={cx-50} y={cy-100} width={100} height={200} />
      <text x={cx-45} y={cy-45}>A</text>
      <text x={cx-45} y={cy+55}>B</text>
      <text x={cx+45} y={cy-45} textAnchor="end">Sum</text>
      <text x={cx+45} y={cy+55} textAnchor="end">Carry</text>
    </g>
  );
  
}

export function FullAdder({props}) {
  let {cx,cy,transform=''} = props;

  /*
    return rect with 2 inputs (A,B,C) and 2 outputs (Sum,Carry)

    A|B|C|Sum|Carry
    0|0|0| 0 | 0
    0|0|1| 1 | 0
    0|1|0| 1 | 0
    0|1|1| 0 | 1
    1|0|0| 1 | 0
    1|0|1| 0 | 1
    1|1|0| 0 | 1
    1|1|1| 1 | 1
    
   */

  return (
    <g transform={transform} textAnchor="middle">
      <rect x={cx-50} y={cy-50} width={100} height={100} />
      <text x={cx-25} y={cy+45}>A</text>
      <text x={cx+25} y={cy+45}>B</text>
      <text x={cx+35} y={cy+5}>C<tspan fontSize='60%'>in</tspan></text>
      <text x={cx-30} y={cy+5}>C<tspan fontSize='60%'>out</tspan></text>
      <text x={cx}    y={cy-30}>Sum</text>
    </g>
  );
  
}

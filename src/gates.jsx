export function Buffer({props}) {
  let {cx,cy,transform,state=true} = props;
  return (
    <g className={`"gate ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path className='triangle' d={`M${cx-40},${cy-45} v90, l79.5,-45 z`} /> 
    </g>
  );
}

export function NOT({props}) {
  let {cx,cy,transform,state=true} = props;
  return (
    <g className={`"gate NOT ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path className='triangle' d={`M${cx-40},${cy-45} v90, l79.5,-45 z`} /> 
      <circle cx={cx+45} cy={cy} r={5} />
    </g>
  );
}

export function AND({props}) {
  let {cx,cy,state,transform} = props;
  return (
    <g className={`gate AND ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40} h40 a30,30 0 0 1 0,80 h-40 z`} />
    </g>
  );
}

export function NAND({props}) {
  let {cx,cy,state=true,transform} = props;
  return (
    <g className={`gate NAND ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40} h40 a30,30 0 0 1 0,80 h-40 z`} />
      <circle cx={cx+45} cy={cy} r={5} />
    </g>
  );
}

export function OR({props}) {
  let {cx,cy,state,transform} = props;
  return (
    <g className={`gate OR ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40}  q40,0 80,40  q-40,40 -80,40  q30,-40  0,-80 z`}  />
    </g>
  );
}

export function NOR({props}) {
  let {cx,cy,state=true,transform} = props;
  return (
    <g className={`gate NOR ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40}  q40,0 80,40  q-40,40 -80,40  q30,-40  0,-80 z`} />
      <circle cx={cx+45} cy={cy} r={5} />
    </g>
  );
}


export function XOR({props}) {
  let {cx,cy,state,transform} = props;
  return (
    <g className={`gate XOR ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40}  q40,0 80,40  q-40,40 -80,40  q30,-40  0,-80 z`}  />
      <path d={`M${cx-50},${cy-40}  q30,40 0,80`} style={{fill:'none'}} />
    </g>
  );
}


export function XNOR({props}) {
  let {cx,cy,state,transform} = props;
  return (
    <g className={`gate XNOR ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path d={`M${cx-40},${cy-40}  q40,0 80,40  q-40,40 -80,40  q30,-40  0,-80 z`}  />
      <path d={`M${cx-50},${cy-40}  q30,40 0,80`} style={{fill:'none'}} />
      <circle cx={cx+45} cy={cy} r={5} />
    </g>
  );
}


export function Button({partID, props, dispatch, 
                 dispatchParams={type:'pressButton', partID:partID, state:!props.state}}) {
  let {cx,cy,label,state=false,r=25,transform=''} = props;
  return (
    <g className={`button ${state ? 'on' : 'off'}`}
       transform={transform} transformOrigin={`${cx} ${cy}`}
       style={{pointerEvents:'bounding-box'}}
       onClick={()=>dispatch(dispatchParams)}>
      <circle cx={cx} cy={cy} r={r}  />
      {(label!==null) && <text x={cx} y={cy}
		      style={{textAnchor:"middle", alignmentBaseline:"middle"}}
		      dangerouslySetInnerHTML={{__html:label}} />}
    </g>
  );
}

// usually known as a momentary switch
export function TempButton({partID, props, dispatch, dispatchParams={type:'pressButton'}}) {
  let {cx,cy,label,r=25,state=false,complement=false,transform=''} = props;

  const [onOff, setOnOff] = React.useState(state ? 'on' : (complement ? 'on' : 'off'));

  const press = () => {
    dispatch({...dispatchParams, partID:partID, state:true});
    setOnOff('on');
  };

  const depress = () => {
    dispatch({...dispatchParams, partID:partID, state:false});
    setOnOff('off');
  };


  return (
    <g className={`button ${onOff}`}
       transform={transform} transformOrigin={`${cx} ${cy}`}
       style={{pointerEvents:'bounding-box'}}
       onMouseDown={complement ? depress: press}
       onMouseUp={complement ? press : depress}>
      <circle className={onOff} cx={cx} cy={cy} r={r}  />
      {label!==null &&
       <text x={cx} y={cy} textAnchor="middle" alignmentBaseline="middle"
             textDecoration={complement ? 'overline' : 'none'}>{label}</text>}
    </g>
  );
}


export function Wire({props}) {
  let {d, state=false, invisible=false} = props;
  return <path d={d} style={{fill:'none', stroke:(state ? '#0f0' : '#666'),
			     strokeWidth:((invisible && !state) ? 0 : 2)}} />
}


export function Node({cx,cy}) {
    return <circle className='node' cx={cx} cy={cy} r={5} />
}



export function Selector({partID,props,dispatch}) {
  // this represents a selector switch
  let {x,y,buttons,selected,transform=''} = props;
  let labels = Object.keys(buttons);
  return (<g className="selector" transformOrigin={`${x} ${y}`} transform={transform}>
            <rect className="selector" x={x} y={y} width={labels.length*80} height={80} fill="#eee" />
            {labels.map((label,indx) => {
              let key = `${partID}_${indx}`;
	      let state = key === selected;
              return <Button key={key} selectorID={partID} partID={key}
	                     props={{cx:50+x+75*indx, cy:y+40, label, state}}
                             dispatch={dispatch}
                             dispatchParams={{type:'selectButton', partID:key, selectorID:partID}}
                     />;
            }
            )}
          </g>);
}

export function Light({props}) {
  let {cx,cy,state,label,r=50,transform='',complement=false} = props;
  let x1=cx-r*.8;
  let x2=cx+r*.8;
  let y1=cy-r*.6;
  let y2=cy+r*.6;
  return <g transformOrigin={`${cx} ${cy}`} transform={transform} className={`light ${state ? 'on' : 'off'}`} >
           <circle cx={cx} cy={cy} r={r} />
           <line x1={x1} x2={x2} y1={y1} y2={y2} />
           <line x1={x1} x2={x2} y1={y2} y2={y1} />
           {label && <text y={cy+r+25} x={cx} textAnchor="middle" dangerouslySetInnerHTML={{__html:label}} />}
         </g>
}


export function Diode({props}) {
  let {cx,cy,state,transform} = props;
  transform = (props.type === 'led') ? '' : transform;
  let chargedClass = state ? 'on' : '';
  return <g className="diode" transformOrigin={`${cx} ${cy}`} transform={transform}>
      <path className="triangle" d={`M${cx-25},${cy-25} v50, l45,-25 z`} className={chargedClass} />
      <line className="verticalBar" x1={cx+20} x2={cx+20} y1={cy-25} y2={cy+25} />
      <line className="anode" x1={cx-25} x2={cx-50} y1={cy} y2={cy} className={chargedClass} />
      <line className="cathode" x1={cx+20} x2={cx+50} y1={cy} y2={cy} className={chargedClass} />
    </g>
}


export function Arrow({cx,cy,transform=''}) {
  return (
    <g className="arrow" transformOrigin={`${cx} ${cy}`} transform={transform} >
      <line x1={cx} x2={cx} y1={cy+5} y2={cy+15} />
      <path d={`M${cx},${cy} l-2,5 h4 z`} />
    </g>
  );
};



export function LED({props}) {
  let {cx,cy,state,transform} = props;
  return <g className={`led ${state ? 'on' : 'off'}`} transformOrigin={`${cx} ${cy}`} transform={transform}>
           <Diode props={props} />
           <g className="arrows" transform={`translate(0,-35), rotate(30,${cx},${cy})`}>
             <Arrow cx={cx} cy={cy} />
             <Arrow cx={cx+10} cy={cy} />
           </g>
         </g>
}


export function Source({cx,cy,charge,rotate=0}) {
  let chargedClass = charge>0 ? 'on' : '';
  return <g className="source"   transform={`rotate(${rotate}, ${cx}, ${cy})`}>
    <circle cx={cx} cy={cy} r={50} className={chargedClass} />
    <line x1={cx-10} x2={cx+10} y1={cy+20} y2={cy+20} />
    <line x1={cx-10} x2={cx+10} y1={cy-20} y2={cy-20} className={chargedClass} />
    <line x1={cx} x2={cx} y1={cy-30} y2={cy-10} className={chargedClass} />
    <circle cx={cx} cy={cy-50} r={5}  />
    <circle cx={cx} cy={cy+50} r={5}  />
    </g>
}


export function PowerSwitch({cx,cy,powered,dispatch}) {
  let stroke = powered ? '#0f0' : '#444';
  return <g strokeLinecap="round"
            onClick={()=>dispatch({type:'togglePower'})}>
    <circle cx={cx} cy={cy+10} r={40} style={{stroke:'none'}}/>
    <path d={`M ${cx-20}, ${cy-20} 
	      a40,40 0 1,0 40,0`} style={{strokeWidth:'8px', stroke:stroke}} />
    <line x1={cx} x2={cx} y1={cy-30} y2={cy-0} style={{strokeWidth:'8px', stroke:stroke}} />
    </g>
}

export function Subtext(props) {
  return  <tspan style={{fontSize:'70%', alignmentBaseline:'middle'}}>{props.children}</tspan>
}

export function Overline(props) {
  return  <tspan style={{textDecoration:'overline'}}>{props.children}</tspan>
}

export const Qcomp = '<tspan style="text-decoration:overline">Q</tspan>';

export function sub(text) {
  return `<tspan style="font-size:70%; alignment-baseline:hanging;">${text}</tspan>`;
}

export const splitRegex = /[\s|,]+/; // matches commas and whitespace

export function str2arr(str) {
  if (Array.isArray(str)) return str;
  return str.split(/[,\s]+/);
}

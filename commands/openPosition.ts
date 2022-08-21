import register from "../register"

function create(direction: 'long' | 'short'): string {
  let cmd = `
    replace ${direction} entry stop riskperc:
    let _x 0-1,
    let _risk riskperc/100,
    let _usddiff entry-stop,
    let _usdrisk accountvalueusd*_risk,
    let _posz _usdrisk/_usddiff, `

 if (direction === 'short') {
  cmd += `let _posz _posz*_x, `
 }

 cmd += `say position size will be, check value _posz, `

 if (direction === 'long') {
  cmd += `buy _posz entry, set ro, trigger sell _posz stop`
 } else {
  cmd += `sell _posz entry, set ro, trigger buy _posz stop`
 }

 return cmd;
}

register.addCommand(create('long'));
register.addCommand(create('short'));

// const exec = `replace open entry stop riskperc:
//  let _x 0-1,
//  let _risk riskperc/100,
//  let _usddiff entry-stop,
//  let _usdrisk accountvalueusd*_risk,
//  let _posz _usdrisk/_usddiff,
//  if entry < stop,
//  let _posz _posz*_x,
//  else,
//  let _posz _posz,
//  say position size will be,
//  check value _posz,
//  buy _posz entry,
//  set ro, trigger sell _posz stop
//  `.replace(/\n/g, '')

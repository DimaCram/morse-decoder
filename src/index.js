const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let rez = "";
    for(let i = 0; i < expr.length; i += 10)
    {
        let str = expr.slice(i, i + 10);
        rez += str === "**********" ? " " : MORSE_TABLE[decodeStr(str)];
    }
    return rez;
}
function decodeStr(str){
  let rez = "";
  for(let i = 0; i < str.length; i +=2){
    switch(str.slice(i, i + 2)){
      case "00":
        rez += "";
        break;
      case "10":
        rez += ".";
        break;
      case "11":
        rez += "-";
        break;
    }
  }
  return rez;
}

module.exports = {
    decode
}
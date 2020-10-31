'use strict';
class Multi {
  braces(values) {
    var ret = [];

    for (var i = 0; i < values.length; i++) {
      console.log(values[i]);
      ret.push(this.balancedBraces(values[i]));
    }

    return ret;
  }

  balancedBraces(inputStr) {
    var checkStr = '[]{}()';
    var stack = [];
    var i, character, bracePosition;

    for (i = 0; (character = inputStr[i]); i++) {
      // console.log('stack', stack);
      console.log('character = inputStr[i]', (character = inputStr[i]));
      bracePosition = checkStr.indexOf(character);
      // console.log('index', checkStr.indexOf(character));

      if (bracePosition === -1) {
        // console.log('bracePosition after -1', bracePosition);
        continue;
      }

      if (bracePosition % 2 === 0) {
        // console.log('bracePosition after %2', bracePosition);
        stack.push(bracePosition + 1);
        // console.log('bracePosition after +1', bracePosition + 1);
        // console.log('stack', stack);
        // console.log('pop', stack.pop());
      } else if (stack.pop() !== bracePosition) {
        // console.log('bracePosition after else', bracePosition);
        console.log('else pop', stack.pop());

        return 'NO';
      }
    }

    return stack.length === 0 ? 'YES' : 'NO';
  }
}

var values = ['[{()}({)'];
var res = new Multi();
console.log('jjaj', res.braces(values));

// let basket = '{({})()[}]';
// function checkingBalance(input) {
//   let count = 0;
//   let opening = [];
//   let closing = [];
//   let sent = [];
//   for (const c of input) {
//     if (c === '{' || c === '(' || c === '[') {
//       count++;
//       // console.log('opining', c);
//       // opening.push(c);
//       // sent.push('open');
//     } else if (c === '}' || c === ')' || c === ']') {
//       count--;
//       // console.log('closing', c);
//       // closing.push(c);
//       // sent.push('close');
//     }
//   }
//   console.log(count);
//   // console.log(opening);
//   // console.log(closing);
//   // if (opening.length !== closing.length) {
//   //   return 'is not balance';
//   // } else {
//   //   return checking(sent);
//   // }
//   // console.log(sent);
//   function checking(sent) {
//     for (let index = 0; index <= sent.length; index++) {
//       if (sent[index] === 'open') {
//         if (sent[index + 1] === 'close' && sent[index + 2] === 'close') {
//           return 'is not balance';
//         }
//       }
//     }
//     return 'is okay';
//   }
//   // return checking(sent);
// }
// console.log(checkingBalance(basket));
module.exports = Multi;

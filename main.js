/******************
 * YOUR CODE HERE *
 ******************/

function xify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr = newStr + 'x';
    }
return newStr;
}

function smilify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr = newStr + '😊'; 
    }
return newStr;
}

function yellingChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr = newStr + str[i] + '!'
    }
return newStr;
}

function indexedChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr =  newStr + i + str[i]  
    }
return newStr;
}

function numberedChars(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr =   '(1)' + str[i] 
    }
return newStr;
}

function repeatIt(str, count) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr = str.repeat(count)
    }
return newStr;
}

function reverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      newStr = str[i] + newStr
    }
return newStr;
}

function ciEmailify(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      result = result + '.';
    } else {
      result = result + name[i].toLowerCase();
    }
}
  return result + '@codeimmersives.com'
}

function onlyVowels(str) {
  let vowels = 'aeiou';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str)){
      }
      return newStr;
    
}
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}
if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}
module.exports = {
  xify,
  smilify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}

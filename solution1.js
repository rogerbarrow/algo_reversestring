// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Turn "str" into an array
// Call "reverse" method on the array
// Join the array back to string
//return the result
function reverse(str) {
  const arr = str.splits('');
  arr.reverse();
   return arr.join('');
  
  }

  // We can do a little bit of code clean up

  function reverse(str) {
    return str
    .split('')
    .reverse()
    .join('');
  }
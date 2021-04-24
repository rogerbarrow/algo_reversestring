// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//creat an empty string called 'reversed
//for each character in the provided string
//take the character and add it to the start of 'reversed;
// Return the varaible 'reversed'
function reverse(str) {
  let reversed = '';

for (let character of str) {
  reversed = character + reversed;
}

return reversed;

}
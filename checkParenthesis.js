function checkParenthesis(str) {
  let arr = str.split(''); //łatwiej operować na tablicy
  let counted = 0; // pusta tablica na pushowanie nawiasów
  arr.forEach(function(parenthesis) {
    if (parenthesis === ')') {
      counted--;
      if (counted < 0) {
        return false;
      }
    } else if (parenthesis === '(') {
      counted++;
    } else {
      throw Error('Invalid character: ' + parenthesis)
    }
  });
  return counted === 0;
}

checkParenthesis('(())(()')


1 + 2 + 3 + 4 + 5 + 6 == O(n^2)
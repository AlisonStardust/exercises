// function howManyA(str) {
//   var empty = [];
//   var words = str.split(" ");
//   var wordsWithA = words.forEach(function(word) {
//     if (word[0] == 'A') {
//       empty.push(word);
//     };
//   });
//   return empty;
// }

function arrayEquals(a1, a2) {
  return a1.length == a2.length && a1.every((val, ind) => val === a2[ind]);
}

function allWordsWithA(str) {
  return str.split(" ").filter(word => word[0] == 'A' || word[0] == 'a');
}

console.assert(arrayEquals([1, 3], [1, 3]));
console.assert(!arrayEquals([1], [2]));
console.assert(!arrayEquals([1], [1, 2]));

console.assert(arrayEquals(allWordsWithA("Ala"), ["Ala"]));
console.assert(arrayEquals(allWordsWithA("Ala Adam"), ["Ala", "Adam"]));
console.assert(arrayEquals(allWordsWithA("Ala kot Adam"), ["Ala", "Adam"]));
console.assert(arrayEquals(allWordsWithA("Ala ma arbuza"), ["Ala", "arbuza"]));

//console.log(howManyA("Ala ma Ala kota"));
function vowels (str) {
  var counted = 0;
  var multipleVowels =[];
  var splited = str.toLowerCase().split(" ");
  splited.map(function(word){
    for (i=0; i<=word.length; i++){
      if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        counted++;
        if (counted >= 2) {
          multipleVowels.push(word);
          counted = 0;
          break;
        }
      }
    }
  });
return multipleVowels;
}

console.log(vowels("ala nnnaa aaaaaaaaa ala ula mamna"));


//wersja 2
function vowels3 (str) {
  var moreVowels = [];
  var splited = str.replace(/[b-df-hj-np-tv-z]/gi, '').toLowerCase().split(" ");
  splited.map(function(word){
    if (word.length >= 2) {
      return word;
    }
  });
  return moreVowels;
}

console.log(vowels3("Ala ma Kota"));

//wersja 2 w ES6
function vowels4 (str) {
  return str.replace(/[b-df-hj-np-tv-z]/gi, '').toLowerCase().split(" ").map( word => word.length >=2);
}

console.log(vowels4("Ala ma kota"));
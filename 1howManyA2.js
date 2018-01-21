function getVowels(str) {
  var splited = str.split(" ");
  var vowelsCount = [];
  var vowels = splited.forEach(function(word) {
    if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u") {
      vowelsCount.push(word);
    }
  });
  console.log(vowelsCount);
}

getVowels("ala ma kota ala");
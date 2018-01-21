function isEven(str) {
  var notEvenWords = [];
  var evenWords = [];
  var evenArr = str.split(" ");
  var aaa = evenArr.map(function(n){
    if (n.length % 2 == 0){
      evenWords.push(n);
    } else {
      notEvenWords.push(n);
    }
  console.log(evenWords);
  });
}

isEven("kot eliot jest super");


function isEven2(str) {
  var evenWords = [];
  var notEvenWords [];
  str.split(" ").map(n => n.length % 2 == 0 ? evenWords.push(n) : notEvenWords.push(n));
  return evenWords;
}

isEven2("Ala ma kota");
function reverseWord(str) {
  return str.split("").reverse().join("");
}

function reverseStr(str) {
  return str.split(" ").map(reverseWord).join(" ");
}

console.log(reverseStr("Ala ma kota"));
function pali(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase();
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

pali("A man, a plan, a canal. Panama");
function isPalindrome(str) {
  var lowered = str.toLowerCase();
  var notReversed = lowered.split("").join(" ");
  var reversedArr = lowered.split("").reverse().join(" ");

  if (reversedArr === notReversed) {
    console.log("It's a palindrome");
  } else {
    console.log("It's not a palindrome");
  }
}

isPalindrome("Ala");
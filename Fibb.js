function Fibb(n) {
  if (n <= 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    for (i = 2; i <= n; i++) {
      let next = a + b;
      a = b;
      b = next;
    }
    return b;
  }
}

console.log(Fibb(10));
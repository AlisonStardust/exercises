function Fibb(n) {
  console.log('fibbing ' + n);
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return Fibb(n - 1) + Fibb(n - 2);
  }
}
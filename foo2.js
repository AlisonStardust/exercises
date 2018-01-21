function foo() {
  for (let i=0; i<10; i++) {
    try {
      bar(i);
    } catch (exc) {
      console.log('Oops!', exc);
    }
  }
}

function bar(x) {
  console.log(x);
  if (x === 5) {
    let a = null;
    console.log(a.something);
  }
  console.log('done');
}

foo();
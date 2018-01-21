function getAdder(n) {
  let foo = "foo";
  return function(x) {
    return foo + x + n;
  }
}

const addOne = getAdder(1);
const addFive = getAdder(5);

console.log(addOne(5));

function greet(greeting, name) {  
  return myApi.getPerson(name)
    .then(person => wait(10).then(() => person))
    .then(person => getAvatar(person))
    .then(avatar => console.log(`${greeting}, ${name} of width ${avatar.width}`))
    .catch(error => console.log(error));
}

fetch(`/api/people/${name}`).then(person => .....)

function greet(greeting, name, success, errHandler) {
  myApi.getPerson(
    name,
    person => {
      getAvatar(
        person,
        avatar => {console.log('asdfasdf'); success(avatar); },
        errHandler
      )
    },
    errHandler
  );
}

greet('Hello', 'Alicja').then(....);

let people = [myApi.getPerson('Alice'), myApi.getPerson('Bob')];
Promise.all(people).then(peopleObjects => ...)

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve);
  }, n * 1000);
}

setTimeout(function() {....}, 4000);

wait(10).then(say('boo!'));
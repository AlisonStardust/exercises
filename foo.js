function foo({name, age, reports, ...otherProperties}) {
  console.log(otherProperties);
  const reportsStr = reports.map(report => report.name).join(', ');
  return `${name} is ${age} years old. His reports are: ${reportsStr}`;
}


console.log(sum(1, 2, 3, 4));

console.log(foo({name: 'Bartosz', age:156, toys: ['laser', 'lightsabre'], foobar: 1, reports: [{name: 'Ala', age: 1}, {name: 'Bob', age: 1}]}));


function findByName({name, role, reports}){
  
}
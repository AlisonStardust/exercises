//Wyobraź sobie, że projektujesz aplikację dla działu HR.
// Twoje API zwróciło drzewo hierarchii pracowników w postaci obiektów. Zawierają one pola name, role oraz reports.
// Dwa pierwsze to łańcuchy określające imię i stanowisko, a trzeci to lista podwładnych, z których każdy znów jest obiektem o takiej strukturze.
// Przykład znajdziesz poniżej. A teraz właściwe zadania:

// 1. Użytkownik ma mieć możliwość szybkiego znalezienia pracownika po imieniu. Napisz funkcję findByName(name, person),
// która przyjmuje imię oraz obiekt jakiegoś pracownika, a następnie znajduje wśród jego samego oraz jego podwładnych
// (niekoniecznie bezpośrednich) osobę o danym imieniu. Funkcja ma zwrócić obiekt odpowiadający poszukiwanej osobie.

// 2. Użytkownik chce wiedzieć, ile firma zatrudnia sekretarek, a ilu asystentów. Napisz funkcję countByRole(role, person),
// która przyjmuje nazwę roli oraz obiekt pracownika, a następnie zlicza wszystkich podwładnych, którzy pod niego podlegają (z nim samym włącznie),
// którzy są zatrudnieni na danym stanowisku.


var employees = {
  "name": "Alice",
  "role": "CEO",
  "reports": [
    {
      "name": "Bob",
      "role": "assistant",
      "reports": []
    },
    {
      "name": "Clark",
      "role": "secretary",
      "reports": []
    },
    {
      "name": "Denise",
      "role": "director",
      "reports": [
        {
          "name": "Emma",
          "role": "assistant",
          "reports": []
        },
        {
          "name": "Fiona",
          "role": "secretary",
          "reports": []
        },
        {
          "name": "George",
          "role": "secretary",
          "reports": []
        },
        {
          "name": "Henry",
          "role": "engineer",
          "reports": []
        },
        {
          "name": "Irene",
          "role": "engineer",
          "reports": []
        },
        {
          "name": "Jack",
          "role": "manager",
          "reports": [
            {
              "name": "Ken",
              "role": "engineer",
              "reports": []
            },
            {
              "name": "Larry",
              "role": "engineer",
              "reports": []
            },
            {
              "name": "Mary",
              "role": "engineer",
              "reports": []
            }
          ]
        }
      ]
    }
  ]
}

function findByName(name, person){
  var results = [];
  
  findPersonSec(name, person);
  
  function findPersonSec(name, person){
    if(name === person.name){
      results.push(person);
    } else if (person.reports.length) {
      person.reports.forEach(function(e){
        findPersonSec(name, e)
      })
    }
  }
  return results;
}

console.log(findByName("Jack", employees));


function countByRole2(role, person) {
    var count = 0;
    if (role === person.role) {
      count++;
    } else if (person.reports.length) {
      person.reports.forEach(function(a) {
        if (role === a.role) {
          count++;
        } else if (a.reports.length) {
          a.reports.forEach(function(b) {
            if (role === b.role) {
              count++;
            } else if (b.reports.length) {
              b.reports.forEach(function(c) {
                if (role === c.role) {
                  count++;
                }
              })
            }
          });
        }
      });
      console.log(count);
    }
  }

console.log(countByRole2("engineer", employees));
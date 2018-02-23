function isValidSudoku(arr) {
  const correctArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function validateRow() {
    if (arr.every(isEqualRow)) {
      return true;
    } else {
      return false;
    }

    function isEqualRow(element) {
      let row = element.slice()
      row.sort()
      return (JSON.stringify(row) === JSON.stringify(correctArray))
    }
  }

  //tworzenie nowej arr dla wszystkich arr z columnami, zeby zrobic .every()
  function validateColumn() {
    let arrOfColumns = [];
    arr[0].map((col, i) => {
      var column = [];
      arr.map(row => column.push(row[i]));
      column.sort();
      arrOfColumns.push(column)
    });
    if (arrOfColumns.every(isEqual)) {
      return true;
    } else {
      return false;
    }
  }

  let exam = 0;
  let allSquares = [];
  let square = [];

  function validateSquare() {
    for (col = 0; col <= 2; col++) {
      validation(0, 1, 2);
    }
    for (col = 0; col <= 2; col++) {
      validation(3, 4, 5);
    }
    for (col = 0; col <= 2; col++) {
      validation(6, 7, 8);
    }
    for (col = 3; col <= 5; col++) {
      validation(0, 1, 2);
    }
    for (col = 3; col <= 5; col++) {
      validation(3, 4, 5);
    }
    for (col = 3; col <= 5; col++) {
      validation(6, 7, 8);
    }
    for (col = 6; col <= 8; col++) {
      validation(0, 1, 2);
    }
    for (col = 6; col <= 8; col++) {
      validation(3, 4, 5);
    }
    for (col = 6; col <= 8; col++) {
      validation(6, 7, 8);
    }
    if (allSquares.length === 9) {
      if (allSquares.every(isEqual)) {
        return true;
      } else {
        return false;
      }
    }
  }

  // tworzenie squares
  function validation(first, second, last) {
    square.push(arr[col][exam + first], arr[col][exam + second], arr[col][exam + last]);
    if (square.length === 9) {
      square.sort();
      allSquares.push(square);
      square = [];
    }
  }
  
  //walidacja elementu dla columns i squares
  function isEqual(element2) {
    return (JSON.stringify(element2) === JSON.stringify(correctArray))
  }

  // walidacja każdej funkcji dla rows, columns i squares
  if (validateColumn() && validateRow() && validateSquare()) {
    console.log("It's correct!");
    return true;
  } else {
    console.log("It's incorrect!");
    return false;
  }
}

console.log(isValidSudoku([
  [1, 3, 4, 2, 5, 7, 8, 6, 9],
  [2, 5, 6, 1, 8, 9, 3, 4, 7],
  [7, 8, 9, 3, 4, 6, 1, 2, 5],
  [3, 1, 2, 4, 6, 5, 7, 9, 8],
  [4, 6, 7, 8, 9, 1, 2, 5, 3],
  [5, 9, 8, 7, 2, 3, 4, 1, 6],
  [6, 2, 1, 5, 3, 8, 9, 7, 4],
  [8, 4, 5, 9, 7, 2, 6, 3, 1],
  [9, 7, 3, 6, 1, 4, 5, 8, 2]
]));
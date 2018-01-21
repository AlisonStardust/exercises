function printRectangle(rows, lines) {

  var shape = "";

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < lines - 1; x++) {
      shape += "#";
    }
    shape += "# \n";
  }

  console.log(shape);
}
printRectangle(3, 5);
function row(height) {

  var shape = "";

  for (var i = 0; i < height; i++) {
    for (var z = 0; z < (height-i); z++){
          shape += " ";
        }
    for (var x = 0; x < (i*2)+1; x++) {
      shape += "*";
    }
    shape += "\n";
  }

  console.log(shape);
}

row(10);

//n == 0 -> g == 1
//n == 1 -> g == 3
//n == 2 -> g == 5
//n == 3 -> g == 7
//n == 4 -> g == 9
//gn(i) == 

//i == height-2 -> 2
//i == height-3 -> 3

//s(i) == height-i


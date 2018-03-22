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
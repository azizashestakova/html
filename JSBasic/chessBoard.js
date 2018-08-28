function getchessBoard(width, height) {
  var hash = " ";
  var space = " ";
  for (var i = 0; i < height; i++) {
    hash += "\n";
    for (var j = 0; j < width; j++) {
      if ((i + j) % 2 == 0) {
        hash += space;
      } else {
        hash += "#";
      }
    }
  }
  return hash;
}
console.log(getchessBoard(8, 4));

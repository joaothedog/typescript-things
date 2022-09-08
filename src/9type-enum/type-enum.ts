enum Colors {
  RED, //
  BLUE = 100, //
  GREEN = 300, //
}

enum Colors {
  PURPLE = 'PURPLE',
  YELLOW = 203,
  PINK,
}

// console.log(Colors)
// console.log(Colors.BLUE);
// console.log(Colors[Colors.BLUE]);
// console.log(Colors.PURPLE);
// console.log(Colors.YELLOW);
// console.log(Colors.PINK);

function pickColor(color: Colors): void {
  console.log(Colors[color]);
}

pickColor(Colors.PURPLE);

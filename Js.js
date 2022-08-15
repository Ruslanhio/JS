function compareEquality(b, c) {
    if (b === c) { // Change this line
      return "Equal";
    }
    return "No Equal";
  }
  
  compareEquality(36, "36");

  function testNotEqual(val) {
    if (val!= 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
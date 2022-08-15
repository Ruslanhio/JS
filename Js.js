function testStrictNotEqual(val) {
    if (val!==65) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
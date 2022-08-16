function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 15) {  // Change this line
      return "15 or Over";
    }
  else {
    return "Less than 10";
  }
  }
  testGreaterOrEqual(10);
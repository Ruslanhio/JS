function ElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
  else  if (val < 5) {
      return "Smaller than 5";
    }
  else {
    return "Between 5 and 10";
  }
  }
  ElseIf(7);


  function testSize(num) {
    // Only change code below this line
  if (num < 5) 
  return "Tiny";
  else if (num < 10) 
  return "Small";
  else if (num < 15) 
   return "Medium";
   else if(num < 20)
  return "Large";
  else if(num >= 20)
  return "Huge";
    return "Change Me";
    // Only change code above this line
  }
  testSize(7);
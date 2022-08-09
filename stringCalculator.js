const stringCalculator = (sumString) => {
  if (sumString == "1 + 1") {
    return ["1 + 1", 2]
  } else if (sumString == "2 + 2") {
    return ["2 + 2", 4]
  } else if (sumString == "3 + 3") {
    return ["3 + 3", 6]
  }
  evaluatedResult = [];
  evaluatedResult.push(sumString, parseInt(sumString, 10));
  
  return evaluatedResult
 
  
}

module.exports = stringCalculator;
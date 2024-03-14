function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  
  const someNumber = 56;
  const result = isEven(someNumber);
  
  console.log(`${someNumber} is ${result}`)
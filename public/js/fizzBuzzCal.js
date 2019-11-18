function calFizzBuzz() {
  response = [];
  for (let i = 1; i < 101; i++) {
    temp = "";
    if (i % 3 === 0) {
      temp = temp + "Fizz";
    }
    if (i % 5 === 0) {
      temp = temp + "Buzz";
    }
    if (temp) {
      response.push(temp);
    } else {
      response.push(i);
    }
  }
  return response;
}

module.exports = calFizzBuzz;

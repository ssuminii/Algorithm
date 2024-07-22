function solution(n) {
  var result = [];
  
  if (n % 2 === 0) {
    result.push(2);
    while (n % 2 === 0) {
      n = n / 2;
    }
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      result.push(i);
      while (n % i === 0) {
        n = n / i;
      }
    }
  }

  if (n > 2) {
    result.push(n);
  }

  return result;
}

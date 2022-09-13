function solution(n, k) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let answer = 0;

  n.toString(k)
    .match(/[1-9]+/g)
    .forEach((char) => {
      if (isPrime(+char)) answer++;
    });

  // const converted = n.toString(k);
  // const stack = [];
  // converted.forEach((char) => {
  //     if(char === '0' && stack.length) {
  //         let num = ''
  //         while(stack.length && stack[stack.length-1] !== '0') {
  //             num += stack.pop();
  //         }
  //         if(isPrime(+num)) {
  //             if(stack[stack.length-1] === '0')
  //         }
  //     }
  // })

  return answer;
}

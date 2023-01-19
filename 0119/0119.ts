function solution(n: number, a: number, b: number) {
  let answer: number = 0;
  let player: number = n;
  while (player > 1) {
    player /= 2;
    answer++;
  }
  while (n > 1) {
    if (n / 2 < a && n / 2 < b) {
      a -= n / 2;
      b -= n / 2;
      n /= 2;
      answer--;
    } else if (n / 2 >= a && n / 2 >= b) {
      n /= 2;
      answer--;
    } else {
      break;
    }
  }
  return answer;
}

function solution1(n: number, a: number, b: number) {
  let answer: number = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
console.log(solution(8, 7, 8));

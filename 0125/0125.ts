function solution(n: number, left: number, right: number): number[] {
  let answer: number[] = [];
  for (let i = left; i <= right; i++) {
    if (i % n <= Math.floor(i / n)) {
      answer.push(Math.floor(i / n) + 1);
    } else {
      answer.push(1 + (i % n));
    }
  }
  return answer;
}
console.log(solution(4, 7, 14));

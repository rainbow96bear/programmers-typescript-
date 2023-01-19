function solution(n: number, s: number): number[] {
  let answer: number[] = [];
  if (Math.floor(s / n) == 0) {
    return [-1];
  }
  let additional: number = s % n;
  let number: number = s - (s % n);
  for (let i = 1; i <= n; i++) {
    if (n - i < additional) {
      answer.push(number / n + 1);
    } else {
      answer.push(number / n);
    }
  }
  return answer;
}
console.log(solution(2, 9));

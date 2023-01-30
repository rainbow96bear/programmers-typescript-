function solution(a: number, b: number, n: number): number {
  let answer: number = 0;
  while (a <= n) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}
console.log(solution(3, 1, 20));

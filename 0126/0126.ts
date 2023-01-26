function solution(n: number): number {
  let answer: number = 0;
  for (var i = 1; i < n; i++) {
    if ((n / i) % 2 == 1) {
      answer++;
    }
  }
  return answer + 1;
}

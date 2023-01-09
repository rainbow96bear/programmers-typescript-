function solution(x: number, n: number): number[] {
  let answer: number[] = [];
  let i: number = 1;
  while (i <= n) {
    answer.push(x * i);
    i++;
  }
  console.log(answer);
  return answer;
}
solution(2, 5);
solution(4, 5);
solution(-4, 2);

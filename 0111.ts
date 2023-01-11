function solution(k: number, d: number): number {
  let answer: number = 0;
  for (let x: number = 0; x <= d; x += k) {
    let y: number = Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2)));
    answer += Math.floor(y / k) + 1;
  }
  return answer;
}
console.log(solution(2, 4));

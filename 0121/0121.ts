function solution(n: number, works: number[]): number {
  let answer: number = 0;
  works.sort((a, b) => b - a);
  let checkIdx: number = 1;
  while (n > 0 && works[works.length - 1]) {
    for (let i = 0; i < checkIdx && n > 0; i++) {
      if (works[checkIdx - 1] == works[checkIdx]) {
        checkIdx++;
        break;
      }
      n--;
      works[i]--;
    }
  }
  for (let i = 0; i < works.length; i++) {
    answer += works[i] ** 2;
  }
  return answer;
}
console.log(solution(5, [13, 10, 10, 3, 1]));

// while (n > 0) {
//   if (works[works.indexOf(Math.max(...works))] == 0) break;
//   else {
//     works[works.indexOf(Math.max(...works))]--;
//     n--;
//   }
// }

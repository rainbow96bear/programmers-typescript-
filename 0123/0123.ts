function solution(storey: number): number {
  let answer: number = 0;
  while (storey > 0) {
    if (storey % 10) {
      if (storey % 10 == 5 && Math.floor(storey / 10) % 10 > 4) {
        answer += 10 - (storey % 10);
        storey += 10;
      } else if (storey % 10 < 6) {
        answer += storey % 10;
      } else {
        answer += 10 - (storey % 10);
        storey += 10;
      }
    }
    storey = Math.floor(storey / 10);
  }
  return answer;
}

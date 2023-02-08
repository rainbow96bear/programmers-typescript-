function solution(cards: number[]): number {
  let answer: number[] = [];
  let index: number = 0;
  let check: number = 0;
  let checkArr: number[] = [];
  while (check < cards.length) {
    let tempArr: number[] = [];
    do {
      if (checkArr.includes(index)) break;
      tempArr.push(index);
      checkArr.push(index);
      index = cards[index] - 1;
      check++;
    } while (!tempArr.includes(index));
    answer.push(tempArr.length);
    index++;
  }
  answer.sort((a, b) => b - a);
  return answer.length == 1 ? 0 : answer[0] * answer[1];
}

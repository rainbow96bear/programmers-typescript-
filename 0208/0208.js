function solution(cards) {
  let answer = [];
  let index = 0;
  let check = 0;
  let checkArr = [];
  while (check < cards.length) {
    let tempArr = [];
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

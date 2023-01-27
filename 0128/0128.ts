function solution(want: string[], number: number[], discount: string[]) {
  let answer: number = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    let checkNumArr = [...number];
    let checkArr: string[] = discount.slice(i, i + 10);
    for (let j = 0; j < 10; j++) {
      let idx: number = want.findIndex((item) => {
        return item == checkArr[j];
      });
      checkNumArr[idx]--;
    }
    if (
      !checkNumArr.find((item) => {
        return item != 0;
      })
    ) {
      answer++;
    }
  }
  return answer;
}
solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);

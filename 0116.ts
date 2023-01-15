function solution(progresses: number[], speeds: number[]): number[] {
  let answer: number[] = [];
  let max: number = 0;
  let temp: number = 1;
  for (let i = 0; i < progresses.length; i++) {
    let date: number = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (max < date) {
      if (i != 0) {
        answer.push(temp);
      }
      max = date;
      temp = 1;
      continue;
    }
    temp++;
  }
  answer.push(temp);
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

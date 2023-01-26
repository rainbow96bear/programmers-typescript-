function solution(
  today: string,
  terms: string[],
  privacies: string[]
): number[] {
  let answer: number[] = [];
  let tDay: string[] = today.split(".");
  let termObj: object = {};
  for (let i = 0; i < terms.length; i++) {
    let tempArr = terms[i].split(" ");
    termObj[tempArr[0]] = tempArr[1];
  }
  for (let i = 0; i < privacies.length; i++) {
    let firstDiv: string[] = privacies[i].split(" ");
    let days: string[] = firstDiv[0].split(".");
    let privacy: string = firstDiv[1];
    let year = parseInt(days[0]);
    let month = parseInt(days[1]) + parseInt(termObj[privacy]);
    let day = parseInt(days[2]);
    while (month > 12) {
      month -= 12;
      year++;
    }
    if (
      parseInt(tDay[0]) > year ||
      (parseInt(tDay[0]) == year && parseInt(tDay[1]) > month) ||
      (parseInt(tDay[0]) == year &&
        parseInt(tDay[1]) == month &&
        parseInt(tDay[2]) >= day)
    ) {
      answer.push(i + 1);
    }
  }
  return answer;
}
console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

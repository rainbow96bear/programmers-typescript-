// function solution(participant: string[], completion: string[]): string {
//   let answer: string = "";
//   answer = participant.join(" ");
//   for (let i = 0; i < completion.length; i++) {
//     answer = answer.replace(completion[i], "").trim();
//   }
//   return answer;
// }
function solution(participant: string[], completion: string[]): string {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

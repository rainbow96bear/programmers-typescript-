function solution(s: string): string {
  s = s.toLowerCase();
  let answer = s.split("");
  answer[0] = answer[0].toUpperCase();
  for (let i = 1; i < answer.length - 1; i++) {
    if (answer[i] == " ") {
      answer[i + 1] = answer[i + 1].toUpperCase();
    }
  }
  return answer.join("");
}

function solution(s: string): boolean {
  let answer: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")") {
      answer--;
      if (answer < 0) {
        return false;
      }
    } else {
      answer++;
    }
  }
  return !answer;
}
console.log(solution("()()"));

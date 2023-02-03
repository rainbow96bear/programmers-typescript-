function solution(s: string, skip: string, index: number): string {
  let answer = "";
  let spelling = [];
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    spelling.push(String.fromCodePoint(i));
  }
  for (let i = 0; i < skip.length; i++) {
    spelling.splice(spelling.indexOf(skip[i]), 1);
  }
  for (let i = 0; i < s.length; i++) {
    answer += spelling[(spelling.indexOf(s[i]) + index) % (26 - skip.length)];
  }
  return answer;
}

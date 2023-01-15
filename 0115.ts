function solution(s: string): boolean {
  let checkArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    checkArr.push(s[i]);
    if (i > 0) {
      if (
        checkArr[checkArr.length - 2] == "(" &&
        checkArr[checkArr.length - 1] == ")"
      ) {
        checkArr.pop();
        checkArr.pop();
      }
    }
  }
  if (checkArr.length == 0) {
    return true;
  }

  return false;
}
console.log(solution("()()"));

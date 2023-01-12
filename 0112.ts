function solution(A: number[], B: number[]): number {
  let answer: number = 0;
  let temp: number = 0;
  A = A.sort(function (a, b) {
    return a - b;
  });
  B = B.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < B.length; j++) {
      if (A[i] < B[j]) {
        temp = B[i];
        B[i] = B[j];
        B[j] = temp;
        answer++;
        break;
      }
    }
  }
  return answer;
}

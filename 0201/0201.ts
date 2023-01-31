function solution(array: number[]): number {
  let answer: number = -1;
  array = array.sort((a, b) => a - b);
  let maxLength: number = 0;
  let length: number = 0;
  for (let i = 0; i < array.length; i++) {
    length++;
    if (array[i] != array[i + 1]) {
      if (maxLength == length) {
        answer = -1;
      } else if (maxLength < length) {
        maxLength = length;
        answer = array[i];
      }
      length = 0;
    }
  }
  return answer;
}
solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);

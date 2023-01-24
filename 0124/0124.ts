function solution(n: number): number[] {
  let answer = [];
  var triangle = new Map();
  var point: number = Math.floor(n / 3);
  var direction: number = n % 3;
  var addNum: number = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    triangle.set(i, []);
  }
  triangle.set(point, [addNum]);
  addNum--;
  for (var i = 1; i <= n + 1 && addNum != 0; i++) {
    for (let j = 0; j < i; j++) {
      if (direction == 0) {
        point--;
      } else if (direction == 1) {
        point++;
      }
      if (point == n || point < 0) {
        break;
      }
      if (direction == 0) {
        triangle.set(point, [...triangle.get(point), addNum]);
      } else {
        triangle.set(point, [addNum, ...triangle.get(point)]);
      }
      addNum--;
    }
    direction = (direction + 2) % 3;
  }
  direction = (direction + 2) % 3;
  for (var i = n - 1; -1 < i; i--) {
    answer.push(...triangle.get(i));
  }
  return answer;
}
// function solution(n: number) {
//   let a = Array(n)
//     .fill()
//     .map((_, i) => Array(i + 1).fill());
//   let row = -1;
//   let col = 0;
//   let fill = 0;
//   for (let i = n; i > 0; i -= 3) {
//     a[++row][col] = ++fill;
//     for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
//     for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
//     for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
//   }
//   return a.flat();
// }
console.log(solution(5));

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solution(n) {
    var answer = [];
    var triangle = new Map();
    var point = Math.floor(n / 3);
    var direction = n % 3;
    var addNum = (n * (n + 1)) / 2;
    for (var i_1 = 0; i_1 < n; i_1++) {
        triangle.set(i_1, []);
    }
    triangle.set(point, [addNum]);
    addNum--;
    for (var i = 1; i <= n + 1 && addNum != 0; i++) {
        for (var j = 0; j < i; j++) {
            if (direction == 0) {
                point--;
            }
            else if (direction == 1) {
                point++;
            }
            if (point == n || point < 0) {
                break;
            }
            if (direction == 0) {
                triangle.set(point, __spreadArray(__spreadArray([], triangle.get(point), true), [addNum], false));
            }
            else {
                triangle.set(point, __spreadArray([addNum], triangle.get(point), true));
            }
            addNum--;
        }
        direction = (direction + 2) % 3;
    }
    direction = (direction + 2) % 3;
    for (var i = n - 1; -1 < i; i--) {
        answer.push.apply(answer, triangle.get(i));
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

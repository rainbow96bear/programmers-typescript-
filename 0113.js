function solution(n, computers) {
    var answer = 0;
    var stackArr = [];
    for (var i = 0; i < n; i++) {
        if (computers[i][i]) {
            computers[i][i] = 0;
            answer++;
            stackArr.push(i);
        }
        while (stackArr.length) {
            var num = stackArr.pop();
            for (var j = 0; j < n; j++) {
                if (num == j) {
                    computers[num][num] = 0;
                    continue;
                }
                if (computers[num][j] == 1) {
                    computers[num][j] = 0;
                    computers[j][num] = 0;
                    stackArr.push(j);
                }
            }
        }
    }
    return answer;
}
// function solution(n: number, computers: number[][]): number {
//   let answer: number = 0;
//   let check: boolean[] = [];
//   for (let i = 0; i < n; i++) {
//     check.push(false);
//   }
//   for (let i = 0; i < n; i++) {
//     if (!check[i]) {
//       DFS(computers, i, check);
//       answer++;
//     }
//   }
//   return answer;
// }
// function DFS(arr: number[][], num: number, check: boolean[]): boolean[] {
//   check[num] = true;
//   for (let j = 0; j < arr.length; j++) {
//     if (num != j && arr[num][j] == 1 && check[j] == false) {
//       check = DFS(arr, j, check);
//     }
//   }
//   return check;
// }
console.log(solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
]));

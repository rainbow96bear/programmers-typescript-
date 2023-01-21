function solution(n, works) {
    var answer = 0;
    works.sort(function (a, b) { return b - a; });
    var checkIdx = 1;
    while (n > 0 && works[works.length - 1]) {
        for (var i = 0; i < checkIdx && n > 0; i++) {
            if (works[checkIdx - 1] == works[checkIdx]) {
                checkIdx++;
                break;
            }
            n--;
            works[i]--;
        }
    }
    for (var i = 0; i < works.length; i++) {
        answer += Math.pow(works[i], 2);
    }
    return answer;
}
console.log(solution(5, [13, 10, 10, 3, 1]));
// while (n > 0) {
//   if (works[works.indexOf(Math.max(...works))] == 0) break;
//   else {
//     works[works.indexOf(Math.max(...works))]--;
//     n--;
//   }
// }

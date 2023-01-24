function solution(n, left, right) {
    var answer = [];
    for (var i = left; i <= right; i++) {
        if (i % n <= Math.floor(i / n)) {
            answer.push(Math.floor(i / n) + 1);
        }
        else {
            answer.push(1 + (i % n));
        }
    }
    return answer;
}
console.log(solution(4, 7, 14));

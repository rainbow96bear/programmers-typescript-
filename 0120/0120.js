function solution(n, s) {
    var answer = [];
    if (Math.floor(s / n) == 0) {
        return [-1];
    }
    var additional = s % n;
    var number = s - (s % n);
    for (var i = 1; i <= n; i++) {
        if (n - i < additional) {
            answer.push(number / n + 1);
        }
        else {
            answer.push(number / n);
        }
    }
    return answer;
}
console.log(solution(2, 9));

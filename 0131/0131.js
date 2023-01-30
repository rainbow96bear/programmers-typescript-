function solution(a, b, n) {
    var answer = 0;
    while (a <= n) {
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
    }
    return answer;
}
console.log(solution(3, 1, 20));

function solution(n, a, b) {
    var answer = 0;
    var player = n;
    while (player > 1) {
        player /= 2;
        answer++;
    }
    while (n > 1) {
        if (n / 2 < a && n / 2 < b) {
            a -= n / 2;
            b -= n / 2;
            n /= 2;
            answer--;
        }
        else if (n / 2 >= a && n / 2 >= b) {
            n /= 2;
            answer--;
        }
        else {
            break;
        }
    }
    return answer;
}
function solution1(n, a, b) {
    var answer = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}
console.log(solution(8, 7, 8));

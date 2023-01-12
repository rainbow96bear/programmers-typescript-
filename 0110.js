function solution(brown, yellow) {
    var answer = [];
    for (var i = 1; i * i <= yellow; i++) {
        if (!(yellow % i) && 2 * (yellow / i + i) + 4 == brown) {
            answer = [yellow / i + 2, i + 2];
        }
    }
    console.log(answer);
    return answer;
}
solution(10, 2);
solution(8, 1);
solution(24, 24);

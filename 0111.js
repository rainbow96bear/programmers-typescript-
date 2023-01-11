function solution(k, d) {
    var answer = 0;
    for (var x = 0; x <= d; x += k) {
        var y = Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2)));
        answer += Math.floor(y / k) + 1;
    }
    return answer;
}
console.log(solution(2, 4));

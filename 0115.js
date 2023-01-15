function solution(s) {
    var answer = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == ")") {
            answer--;
            if (answer < 0) {
                return false;
            }
        }
        else {
            answer++;
        }
    }
    return !answer;
}
console.log(solution("()()"));

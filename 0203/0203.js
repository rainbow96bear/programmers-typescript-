function solution(s, skip, index) {
    var answer = "";
    var spelling = [];
    for (var i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
        spelling.push(String.fromCodePoint(i));
    }
    for (var i = 0; i < skip.length; i++) {
        spelling.splice(spelling.indexOf(skip[i]), 1);
    }
    for (var i = 0; i < s.length; i++) {
        answer += spelling[(spelling.indexOf(s[i]) + index) % (26 - skip.length)];
    }
    return answer;
}

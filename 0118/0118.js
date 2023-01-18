function solution(s) {
    var checkArr = [];
    for (var i = 0; i < s.length; i++) {
        if (checkArr[checkArr.length - 1] == s[i]) {
            checkArr.pop();
            continue;
        }
        checkArr.push(s[i]);
    }
    if (checkArr.length) {
        return 0;
    }
    else {
        return 1;
    }
}

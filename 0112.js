function solution(A, B) {
    var answer = 0;
    var temp = 0;
    A = A.sort(function (a, b) {
        return a - b;
    });
    B = B.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < A.length; i++) {
        for (var j = i; j < B.length; j++) {
            if (A[i] < B[j]) {
                temp = B[i];
                B[i] = B[j];
                B[j] = temp;
                answer++;
                break;
            }
        }
    }
    return answer;
}

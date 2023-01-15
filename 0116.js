function solution(progresses, speeds) {
    var answer = [];
    var max = 0;
    var temp = 1;
    for (var i = 0; i < progresses.length; i++) {
        var date = Math.ceil((100 - progresses[i]) / speeds[i]);
        if (max < date) {
            if (i != 0) {
                answer.push(temp);
            }
            max = date;
            temp = 1;
            continue;
        }
        temp++;
    }
    answer.push(temp);
    return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

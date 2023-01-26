function solution(today, terms, privacies) {
    var answer = [];
    var tDay = today.split(".");
    var termObj = {};
    for (var i = 0; i < terms.length; i++) {
        var tempArr = terms[i].split(" ");
        termObj[tempArr[0]] = tempArr[1];
    }
    for (var i = 0; i < privacies.length; i++) {
        var firstDiv = privacies[i].split(" ");
        var days = firstDiv[0].split(".");
        var privacy = firstDiv[1];
        var year = parseInt(days[0]);
        var month = parseInt(days[1]) + parseInt(termObj[privacy]);
        var day = parseInt(days[2]);
        while (month > 12) {
            month -= 12;
            year++;
        }
        if (parseInt(tDay[0]) > year ||
            (parseInt(tDay[0]) == year && parseInt(tDay[1]) > month) ||
            (parseInt(tDay[0]) == year &&
                parseInt(tDay[1]) == month &&
                parseInt(tDay[2]) >= day)) {
            answer.push(i + 1);
        }
    }
    return answer;
}
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));

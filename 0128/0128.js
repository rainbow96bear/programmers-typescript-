var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solution(want, number, discount) {
    var answer = 0;
    var _loop_1 = function (i) {
        var checkNumArr = __spreadArray([], number, true);
        var checkArr = discount.slice(i, i + 10);
        var _loop_2 = function (j) {
            var idx = want.findIndex(function (item) {
                return item == checkArr[j];
            });
            checkNumArr[idx]--;
        };
        for (var j = 0; j < 10; j++) {
            _loop_2(j);
        }
        if (!checkNumArr.find(function (item) {
            return item != 0;
        })) {
            answer++;
        }
    };
    for (var i = 0; i < discount.length - 9; i++) {
        _loop_1(i);
    }
    return answer;
}
solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
]);

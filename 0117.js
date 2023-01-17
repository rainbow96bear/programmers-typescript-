function solution(price, money, count) {
    for (var i = 1; i <= count; i++) {
        money -= i * price;
    }
    if (money > 0) {
        return 0;
    }
    else {
        return -money;
    }
}

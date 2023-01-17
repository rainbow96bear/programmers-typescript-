function solution(price: number, money: number, count: number) {
  for (let i = 1; i <= count; i++) {
    money -= i * price;
  }
  if (money > 0) {
    return 0;
  } else {
    return -money;
  }
}

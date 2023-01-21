function solution(food: number[]): string {
  let answer: string[] = ["0"];
  for (let i = food.length - 1; i >= 0; i--) {
    if (food[i] > 1) {
      food[i] = Math.floor(food[i] / 2);
      console.log(food);

      answer.push(`${i}`.repeat(food[i]));
      answer.unshift(`${i}`.repeat(food[i]));
    }
  }
  return answer.join("");
}
console.log(solution([1, 3, 4, 6]));

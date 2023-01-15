// function solution(k: number, room_number: number[]): number[] {
//   let answer: number[] = [];
//   let check: boolean[] = [];
//   for (let i = 0; i < k; i++) {
//     check.push(true);
//   }
//   for (let i = 0; i < room_number.length; i++) {
//     if (check[room_number[i] - 1]) {
//       check[room_number[i] - 1] = false;
//       answer.push(room_number[i]);
//     } else {
//       for (let j = room_number[i]; j < k; j++) {
//         if (check[j]) {
//           check[j] = false;
//           answer.push(j + 1);
//           break;
//         }
//       }
//     }
//   }
//   return answer;
// }

function solution(k: number, room_number: number[]): number[] {
  const answer = [];
  const roomList = new Map();
  const check = (num: number) => {
    if (!roomList.get(num)) {
      roomList.set(num, num + 1);
      return num;
    }
    const nextRoom: number = check(roomList.get(num));
    roomList.set(num, nextRoom + 1);
    return nextRoom;
  };
  for (let i = 0; i < room_number.length; i++) {
    const num: number = check(room_number[i]);
    answer.push(num);
  }
  return answer;
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));

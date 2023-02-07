function solution(n, k) {
  k--;
  let answer = [];
  let check1 = new Array(n).fill().map((item, index) => index + 1);
  let nfac = 1;
  for (let i = 0; i < n - 1; i++) {
    nfac *= check1[i];
  }
  let check2 = n - 1;
  while (check1.length > 0) {
    answer.push(check1[Math.floor(k / nfac)]);

    check1.splice(Math.floor(k / nfac), 1);
    k %= nfac;
    nfac /= check2--;
  }
  return answer;
}

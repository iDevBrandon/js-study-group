6/24/2021
https://www.acmicpc.net/status?user_id=idevbrandon&problem_id=2869&from_mine=1
```
JavaScript

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let answer = 0;
const a = Number(input[0]);
const b = Number(input[1]);
const v = Number(input[2]);

console.log(Math.ceil((v - b) / (a - b)));

// v-b 총 올라가야할 숫자 
// a-b 하루에 얼만큼 가는지 

// 처음에는 for loop 써서 숫자를 올리는 식으로할려고 했는데, 시간초과 뜨네요 

// first, define the max height snail can claim 
// let everyday = a-b; // 1 

// let  
// // maxup++ -> if (maxup > v) {
// //   return answer
// // }

// for(let i=startup; i<=v-1; i++) {
//   count++
// }

// console.log(Math.ceil(count))


```

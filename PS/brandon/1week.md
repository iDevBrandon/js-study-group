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


```

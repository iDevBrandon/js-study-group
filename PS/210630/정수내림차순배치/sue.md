# 정수 내림차순 배치 풀이

```javascript

function solution(n) {
   return parseInt([...n.toString()].sort((a,b)=>Number(b)-Number(a)).join(''))
}

```
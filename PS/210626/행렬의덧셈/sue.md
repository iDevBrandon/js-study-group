# 행렬이 덧셈 풀이


```javascript

function solution(arr1, arr2) {
   return arr1.map((v,i)=>v.map((vv, j )=> vv + arr2[i][j] ))
}

```
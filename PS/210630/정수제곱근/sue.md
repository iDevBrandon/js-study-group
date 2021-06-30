# 정수제곱근 풀이

```javascript
function solution(n) {
   
    return Math.sqrt(n)%1 ===0 ? Math.pow(Math.sqrt(n)+1,2):-1;
}

```
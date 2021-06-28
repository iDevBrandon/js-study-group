# 문자열 다루기 풀이 

```javascript

function solution(s) {
     return !(/[^\d]/g.test(s)) && (s.length===4 || s.length ===6);
}

```
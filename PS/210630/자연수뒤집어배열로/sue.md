# 자연수 뒤집어 배열로 풀이

```javascript

function solution(n) {
    return [...n.toString()].reverse().map(v => Number(v))
}


```
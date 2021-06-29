# 3진법 뒤집기 풀이

```javascript
function solution(n) {
 
    let answer=n.toString(3).split('').reverse().join('')
    return parseInt(answer,3);
}
```

 
```javascript
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
```

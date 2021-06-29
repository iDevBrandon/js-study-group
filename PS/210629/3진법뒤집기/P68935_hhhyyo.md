내풀이

```javascript
function solution(n) {
    let a=n.toString(3).split('').reverse().join('');
    let answer = parseInt(a,3);
    
    return answer;
}
```




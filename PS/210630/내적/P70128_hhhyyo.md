내풀이

```javascript
function solution(a, b) {
    let answer = 0;
    let len=a.length;
    
    for(let i=0;i<len;i++){
        answer+=a[i]*b[i];
    }
    return answer;
}
```

다른사람풀이

```javascript
function solution(a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
    return answer;
}
```


내풀이

```javascript
function solution(n) {
    let answer = String(n).split('').reverse();
    let len=answer.length
    
    for(let i=0;i<len;i++){
        answer[i]/=1;
    }

    return answer;
}
```

다른사람풀이

```javascript
function solution(n) {
    let answer = (n+"").split('').reverse().map(v=>v/1)
    return answer;
}
```


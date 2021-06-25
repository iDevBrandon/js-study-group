내가 푼 방법
```javascript
function solution(x, n) {
    let answer = [];
    let num=x;
    
    //n번만큼 반복하면서 num에 x를 더해서 push
    for(let i=0;i<n;i++){
        answer.push(num);
        num+=x;
    }
    
    return answer;
}
```

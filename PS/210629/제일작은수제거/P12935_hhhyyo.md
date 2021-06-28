```javascript
function solution(arr) {
    let answer = [];
    let min = Math.min(...arr);
    let idx = arr.indexOf(min);
    
    if(arr.length==1){
        answer.push(-1);
        return answer;
    }
    
    if (idx > -1) 
        arr.splice(idx, 1);
    
    answer=arr;

    return answer;
}
```


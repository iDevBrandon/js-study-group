```JavaScript

function solution(s) {
    var answer;
    
//     let arr = s.split('');
    
//     console.log(arr.map(s => s))
    
    if((s.length === 4 || s.length === 6) && !isNaN(s)) {
        answer = true
    } else {
        answer = false
    }
    
    return answer;
}

```

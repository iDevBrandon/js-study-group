```

function solution(arr) {
    var answer = 0;
    let total = 0;
    
    for(let i=0; i<arr.length; i++) {
        total += arr[i]
    }
    
    answer = (total/arr.length)
    
    return answer;
}

```

```JavaScript

function solution(n) {
    var answer = 0;
    let arr = [];
    
    for (let i=0; i<=n; i++) {
        if(n%i == 0){
            arr.push(i)
        }
    }
    
     console.log(arr)
    for(let i=0; i<arr.length; i++) {
        answer += arr[i]
    }
    
    console.log(answer)
    return answer;
}

```

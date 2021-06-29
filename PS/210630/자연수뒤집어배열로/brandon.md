```JavaScript

function solution(n) {
    var answer = [];
    let arr = n.toString().split('');
    
    let newArr = arr.map((n) => Number(n));
    
    
    
    for(let i = arr.length-1; i>=0; i--) {
        answer.push(arr[i])
    }
    
     
    
     answer = answer.map((n) => Number(n));
    return answer;
}

// 내림차순 정렬문제가 아니라, 간단히 거꾸로 뒤집기! for loop 거꾸로 


```

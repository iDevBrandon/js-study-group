```JavaScript

function solution(n) {
    var answer = 0;
    
    let arr = n.toString().split('');
    
    arr.map(n => Number(n))
    
    let pre = (arr.sort((a,b) => b-a))
    
   answer = Number(pre.join(''))
    
    // let preNum = pre.map((n) => Number(n)).join("")
    
    
    return answer;
}

```

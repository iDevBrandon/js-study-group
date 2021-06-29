```JavaScript

function solution(n) {
    var answer = 0;
    
    // n이 어떤 정수x의 제곱!
    // 10은 어떤수 제곱 x 
    // 101 = n, (10+1)를 제곱한 121 
    
    let intNum = Number(Math.sqrt(n));
     
        if(!Number.isInteger(intNum)) {
            return -1
        } else {
            answer = Math.pow(intNum+1,2)
        }
    
    return answer;
}

```

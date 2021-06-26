```


function solution(x) {
    var answer = true;
    let sum = 0;
    
    let num = x.toString().split(''); // [ '1', '3' ]

    let numArr = (num.map(i=>Number(i))); // [ 1, 1 ]

    for(let i=0; i<numArr.length; i++) {
       sum += numArr[i] 
    }
    
    if(x %= sum) {
        return false
    } else {
        return true
    }
    
    return answer;
}


```

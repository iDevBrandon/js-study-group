My attempt 
```
function solution(num) {
    var answer = 0;
    let count = 0;
    
    
    // find out if the num is odd or even 
    if(num !== 1) {
        if(num % 2 === 0) { // even
            num /2;
            count++;
            console.log(count)
        } else { // odd
            num * 3 + 1;
            count++;
        }
    } else {
        return num
    }
    
    
    return answer;
}

```



After getting a hint 

```
function solution(num) {
    var answer = 0;
    
    for(let i=0; i< 500; i++) {
        if(num !== 1) {
            if(num %2 === 0) { // even
                num /= 2
            } else { // odd
                num = num *3 +1
            }
            
        } else {
            return num =i; // i가 우리가 찾고 있는 for loop를 통해 돌고 있는 갯수 
        }
    }
    
    return -1
    
    return answer;
}

```

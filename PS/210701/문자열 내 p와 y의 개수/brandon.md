```JavaScript

function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
    // compare "p" & "y"
    let lower = s.toLowerCase().split('');
    
    
    console.log(lower)
    
    for(let i=0; i<= lower.length;i++){
        if(lower[i] === 'p') {
            p++
        }
        
        if(lower[i] === 'y') {
            y++
        }
    }
    
    if(p === y) {
        return answer;
    } else {
        return false
    }

}

```

```JavaScript

function solution(numbers) {
    var answer = [];
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            let sum = Number(numbers[i]+numbers[j])
             
            answer.push(sum)  
            
        }
    }

    
    let result = ([... new Set(answer)])
     
    console.log(result.sort((a,b) => a-b))
     
       
    return result;
}


```

# 약수의 합 풀이


```javascript

function solution(n) {
    let sum =0;

    if(n===0)return 0
    if(n ===1) return 1
    
    for(let i = 1; i <=Math.sqrt(n) ; i++){
        if(!(n%i)){
            
           if(n/i === i){
               sum+=i; 
               continue;
           }else{
               sum+=i + (n/i)
           }
        }
    }
    return sum;
}

    


```
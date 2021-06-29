내풀이

```javascript
function solution(n) {
    let answer = 0;
    let temp=Math.sqrt(n);
    
    if(temp%1==0){
        answer=(temp+1)**2;
    }
    else{
        answer=-1
    }
    
    return answer;
}
```
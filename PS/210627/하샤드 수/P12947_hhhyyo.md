내가 푼 방법

```javascript
function solution(x) {
    let answer = true;
    let str=x.toString()
    let sum=0;
    
    for(let i=0;i<str.length;i++){
        sum+=parseInt(str[i],10);
        //sum+=Number(str[i]);
    }
    
    if(x%sum>0)
        answer=false;
    
    return answer;
}
```
```javascript
function solution(arr)
{
    let answer = [];
    let prev,curr=-1;
    
    for(let i=0;i<arr.length;i++){
        prev=curr;
        curr=arr[i];
        if(prev!=curr)
            answer.push(curr);
    }
    
    return answer;
}
```


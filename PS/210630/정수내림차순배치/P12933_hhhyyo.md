내풀이

```javascript
function solution(n) {
    let arr=(n+"").split('').sort((a,b)=>{
        return b-a;
    });
    
    let str=arr.reduce((a,b)=>a+b);
    
    let answer = str/1;
    
    return answer;
}
```

다른사람풀이

```javascript
function solution(n) {
    var answer = (n+"").split("").sort().reverse().join("");
    return answer/1;
}
```



-내림차순정렬할때 sort()하고 reverse() 

-배열 문자열로 만들때 join("")
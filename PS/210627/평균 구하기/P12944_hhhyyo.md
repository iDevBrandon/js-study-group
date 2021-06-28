내가 푼 방법

```javascript
function solution(arr) {
    let answer = 0;
    
    for(let i=0;i<arr.length;i++){
        answer+=arr[i];
    }
    
    answer/=arr.length
    
    return answer;
}
```



다른 사람 풀이

```javascript
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
```


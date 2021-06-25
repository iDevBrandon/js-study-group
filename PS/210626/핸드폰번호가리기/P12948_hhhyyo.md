내가 푼 방법

```javascript
function solution(phone_number) {
    let answer = '';
    
    //0부터 끝에서 4번째를 제외한 길이만큼 *반복
    answer='*'.repeat(phone_number.slice(0,-4).length) 
    //끝에서 4개 slice해서 더하기
    answer+=phone_number.slice(-4)
    
    return answer;
}
```



다른 사람 풀이

```javascript
function solution(phone_number) {
    //length로 길이구하고 4빼는게 더 간단하게 풀 수 있었다
    let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
}
```


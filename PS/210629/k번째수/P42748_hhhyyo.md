내풀이

```javascript
function solution(array, commands) {
    let answer = [];
    let row=commands.length;
    
    for(let i=0;i<row;i++){
        let arr=array.slice(commands[i][0]-1,commands[i][1]);
        let n=arr.sort((a,b)=>a-b)[commands[i][2]-1];
        answer.push(n);
    }
    
    
    return answer;
}
```



처음에 arr.sort() 로 정렬했다가 틀리는 케이스가 있었다

arr = [1, 30, 4, 21, 100000];

인경우에는 유니코드 포인터 순서로 문자열을 비교해서 정렬하기때문에

[1, 100000, 21, 30, 4]

이렇게 정렬된다

arr.sort((a,b)=>a-b)

이렇게 해야 숫자 오름차순으로 정렬된다
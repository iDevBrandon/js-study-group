# k번째 수 풀이

`getNthNumber()` 문제에서 요구한대로 i에서 j까지의 범위를 포함한 요소를 `slice`하여 `sort()` 후  k번째수 -1 을 리턴한다. 
```javascript

function solution(array,commands){
    const answer=[];
    for(let command of commands){
        let res = getNthNumber(array, command)
        answer.push(res)
    }

    return answer;
}

function getNthNumber(arr,command){
    return arr.slice(command[0]-1,command[1]).sort((a,b)=>a-b)[command[2]-1]    
}
```
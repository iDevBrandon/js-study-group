```JavaScript

function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
     
    
    let each = n.toString().split('')
    
    let onlyNum = each.map(s => Number(s))
    
     
    
    for(let i=0; i<onlyNum.length; i++) {
        answer += onlyNum[i]
    }
    
    console.log(answer)

    return answer;
}

```

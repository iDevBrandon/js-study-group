# 문제 풀이

x만큼 간격 

n번 만큼 순회하면서, x값을 더한 total을 구한후 answer array에 누적된 값을 넣는다.

```javascript

    const answer=[];
    let total=BigInt(0);

    for(let i =0; i <n;i++ ){
        total += BigInt(x)
        answer.push(total)
    }
    return answer;

```
# 자릿수 더하기 풀이

```javascript

function solution(n)
{
    return n.toString().split('').reduce((acc,cur)=>acc+Number(cur),0);
}

```
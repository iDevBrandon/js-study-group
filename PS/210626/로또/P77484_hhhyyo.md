내가 푼 방법

```javascript
function solution(lottos, win_nums) {
    let answer = [];
    //로또번호만큼 배열 0으로 초기화
    let arr1 = new Array(46).fill(0);
    //순위 배열
    let arr2 = [6,6,5,4,3,2,1];
    let min=0
    let max=0
    
    //로또번호 배열에 표시
    lottos.forEach(i=>{
        arr1[i]++;
    });
    
    //최소 개수 세기
    win_nums.forEach(i=>{
       if(arr1[i])
           min++;
    });
    
    //최대 개수는 최소+0의개수
    max=min+arr1[0];
    answer.push(arr2[max]);
    answer.push(arr2[min]);

    return answer;
}
```


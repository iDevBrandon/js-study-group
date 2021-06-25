내가 푼 방법

```javascript
function solution(arr1, arr2) {
    let row=arr1.length;
    let col=arr1[0].length;
    //2차원배열 row,col 만큼 0으로 초기화
    let answer=Array.from(Array(row), () => Array(col).fill(0))
    
    //반복문 돌면서 더해서 값 넣기
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            answer[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    
    return answer;
}
```


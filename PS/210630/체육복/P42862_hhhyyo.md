내풀이

```javascript
function solution(n, lost, reserve) {
    let answer = 0;
    //n+1 만큼 1로 채운 배열만들기
    let arr=new Array(n+1).fill(1);
    
    //arr[0]은 사용안하므로 0으로 만들기
    arr[0]=0;
    
    //체육복 잃어버린 학생들 -1
    lost.forEach(v=>{
        arr[v]-=1;
    })
    
    //여유로 가져온 학생들 +1
    reserve.forEach(v=>{
        arr[v]+=1;
    })
    
    //잃어버린 학생들
    lost.forEach(v=>{
        //잃어버린 학생들 중 여유로 가져온 학생이 있으므로 1미만인 학생들중에서
        if(arr[v]<1){
            //바로 앞번호가 여유가있으면
            if(arr[v-1]>1){
                arr[v]+=1;
                arr[v-1]-=1;
            }//바로 뒷번호가 여유가있으면
            else if(arr[v+1]>1){
                arr[v]+=1;
                arr[v+1]-=1;
            }
        }
    });
    
    //체육복이 있는 학생 수 세기
    for(let i=1;i<=n;i++){
        if(arr[i]>0){
            answer+=1;
        }
    }
    
    return answer;
}
```



처음에 **"여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다."** 라는 조건을 빼먹고여유로 가져온 학생들한테 2 더하기만했다가 틀렸다.

잃어버린학생들 먼저 1빼고 여유로가져온 학생들 1씩 더하면 여유로 가져온 학생이 잃어버린 것을 반영할 수 있다


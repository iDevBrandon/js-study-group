# 체육복 풀이

```javascript
function solution(n, lost, reserve){
    let answer = 0
    let studentNum = Array.from({length:30},()=>1)
    
    for(let i of lost){
         studentNum[i] -=1
    }
      
     for(let i of reserve){
         studentNum[i] +=1
    }
      
    for(let i=1; i<=n; i++){
        //첫번째 학생이 체육복이 없는 경우, i+1 학생번호 보기
        if (i===1 && studentNum[i] ==0 ){
            if (studentNum[i+1]>=2){
                studentNum[i] +=1
                studentNum[i+1]-=1
            } 
        }
        //두번째 학생부터는 i+1, i-1 을 모두 확인하기
        if (i>=2 && studentNum[i] ==0){
            if(studentNum[i-1] >= 2) {
                studentNum[i] +=1
                studentNum[i-1]-=1
            }else if(studentNum[i+1]>=2){
                  studentNum[i] +=1
                studentNum[i+1]-=1
            } 
        
        }
    }


    for (let i=1; i<= n; i++){
          if (studentNum[i] >= 1) answer+=1
    }
         
    return answer
    }

````
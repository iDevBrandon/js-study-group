# 모의고사 풀이



```javascript

function solution(answers) {
    var answer = [];
    
    //객체리터럴로 pattern정의 
    let patterns = {
         1:[ 1, 2, 3, 4, 5, ],
         2:[2, 1, 2, 3, 2, 4, 2, 5,],
         3:[ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
    }
   
   //patterns를 순회 
    for (let [key,pattern] of Object.entries(patterns)){
        //pattern과 주어진 answers 를 비교
        let count=countCorrection(pattern,answers);
        //맞은 개수 answer에 push 
        answer.push(count);
    }
    
    //answer 에서 최대 점수 구하기
    let max = Math.max(...answer);
    
    //공통된 최대점수 구하기
    let maxes = answer.reduce((acc,cur,i) => cur ==  max ? acc.concat(i) : acc,[]);
    //maxes가 인덱스를 리턴하므로(-1 작은값을 가지기 때문에) +1을 해준다. 
    return maxes.map(v=>v+1);
}

   
   function countCorrection(pattern,answers){
       //비교 
       let pointer = 0;
       let count = 0;
       
       while(pointer !== answers.length){
                  //pointer가 pattern.length보다 크면, 다시 포인터를 0으로 되돌아간다. 
                if(answers[pointer] === pattern[(pointer%pattern.length)]){
                    count++; 
                }
                pointer++;
       }
       return count;
       
   }


```
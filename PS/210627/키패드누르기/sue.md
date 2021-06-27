# 키패드 누르기 풀이

1. 전처리 

`phoneMap`: 핸드폰의 각 키가 left에 해당되면 "L", right 는 "R", 가운데는 null로 할당함.

`coordinateMap`: 이차원 배열의 키패드의 포지션을 map에 할당함. 

2. 주어진 numbers를 순회하면서, null값이 아닌경우 바로 `phoneMap`에서 뽑아오고, null인경우 `getDistance()` 함수를 사용하여 마지막에 들렸던 left에 해당하는 넘버와 현재 넘버의 거리, 마지막에 들렸던 right에 해당하는 넘버와 현재 넘버의 거리를 구한다. 그렇게 구한 거리에서 더 가까운 거리에 있는 넘버가 이전에 왼쪽손을 사용하였으면 L를, 오른쪽이라면 R을, 만약 두거리가 같다면 사용자의 `hand` 로 한다.  


```javascript

function solution(numbers,hand){
    const answer =[];
    const phoneMap= new Map();
    const phone = [
                  [1,2,3],
                  [4,5,6],
                  [7,8,9],
                  ['*',0,'#']
                  ]
    const coordinateMap = new Map();
    
    //mapping
    for(let i =0; i<phone.length;i++){
        for(let j=0; j<phone.length; j++){
            if(j===0) {
                phoneMap.set( phone[i][j], 'L');
                coordinateMap.set(phone[i][j], [i,j])
                
            }else if(j===2){
                phoneMap.set(phone[i][j],'R');
                coordinateMap.set(phone[i][j], [i,j])
                
            }else{
                phoneMap.set(phone[i][j],null);
                coordinateMap.set(phone[i][j], [i,j])
                
            }
        }
    }
    
 
    let position;
    let lastLeftNum="*";
    let lastRightNum="#";
  
    //loop over
    for(let number of numbers ){
           
         let handFromMap = phoneMap.get(number);
        
        if(handFromMap!==null){
            if(handFromMap === 'R'){
                lastRightNum = number;
            }else{
                lastLeftNum = number;
            }
            answer.push(handFromMap);
                        
        }else{
            let distanceFromLeft = getDistance( lastLeftNum,number)
            let distanceFromRight = getDistance(lastRightNum,number)
            
            if(distanceFromLeft === distanceFromRight){
                answer.push(hand==="left"?"L":"R");
                if(hand === "left"){
                    lastLeftNum = number;
               }else{
                   lastRightNum= number;
               }
            }else if(distanceFromLeft < distanceFromRight){
                answer.push('L')  
                lastLeftNum=number
            }else{
                answer.push('R')
                lastRightNum=number
            }
        }
    }

        
        
        
    function getDistance(lastNumber, number){
        let currentCordination=coordinateMap.get(lastNumber);
        let destinationCordination=coordinateMap.get(number);
        
        let dx = Math.abs(destinationCordination[1]-currentCordination[1])
        let dy = Math.abs(destinationCordination[0]-currentCordination[0])
        return dx+dy
    }
    
            return answer.join('')
    
}

```
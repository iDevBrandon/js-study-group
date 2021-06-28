# 두개 뽑아서 더하기 풀이

```javascript

function solution(numbers) {
    var answer = new Set();
    let temp = Array.from({length:2},()=>null);
    DFS(0,0)
    
    function DFS(index, start){
        
        if(index === 2){  
             answer.add(temp[0]+temp[1])           
            return 
        }
        for(let i=start; i <numbers.length; i++){
            
            temp[index] = numbers[i];
            DFS(index+1, i+1);
        }
    }

    return Array.from(answer).sort((a,b)=>a-b);
}

```
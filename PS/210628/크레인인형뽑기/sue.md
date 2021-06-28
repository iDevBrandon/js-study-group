# 크레인 인형뽑기 풀이

스택을 이용한 풀이. 

```javascript

function solution(board, moves) {
    var answer = 0;
    const newBoard = Array.from({length:board.length},()=>[]);
    let stack =[];
    let count=0;
    //preprocessing 
    for(let i=0; i < board.length; i ++){
        for (let j = 1; j<=board.length; j++){
            newBoard[i].push(board[board.length-j][i])            
        }
    }
    let selectedToy;
    //순회한다 moves 
    for(let move of moves){
        
        //move 행에서 pop 을 한다. 만약 0 이면, 0 이 아닐 때까지 pop을 한다.
        while(true){
            
            selectedToy=newBoard[move-1].pop();
            
            if(selectedToy !== 0){
                break;
            }           
        }
       
         //pop한 값과 현재 스택에 있는 peek과 비교한다.
        let stackPeek = stack.length!==0?stack[stack.length-1] :null;
         
        if(selectedToy === stackPeek){
        //만약 둘의 값이 같다면 peek은 pop된다. 그리고 count+=2 를 한다.
            stack.pop();
            count +=2;
        }else{
            if(selectedToy !== undefined){
                stack.push(selectedToy)
            }
        }
    }
    return count
}

```